import React from 'react'

import { View, Button } from '../elements'
import { ButtonsRow, Letter, LettersRow, LogoRow, SloganRow } from './styled'
import { colors } from '../../assets/guideline'


export default function Exams () {
  const { dark02, light01 } = colors
  const OPTIONS = ['SIMULAR EXAMEN', 'EXAMEN ALEATORIO', 'EXAMEN POR TEMAS']
  const LETTERS = ['T', 'E', 'S', 'T']

  return (
    <View>
      <LogoRow></LogoRow>
      <LettersRow>
        {
          LETTERS.map(letter =>
            <Letter
              key={letter}
              content={letter}
              bgColor='green'
              color='white'
            />
          )
        }
        <Letter
          content='U'
          bgColor='blue'
          color='red'
        />
      </LettersRow>
      <SloganRow>
        <span>
          Exámenes de Universidades Argentinas
        </span>
      </SloganRow>
      <ButtonsRow>
        {
          OPTIONS.map(option =>
            <Button
              key={option}
              bgColor={dark02}
              color={light01}
              borderColor={light01}
              content={option}
              margin='0.25rem'
            />
          )
        }
      </ButtonsRow>

    </View>
  )
}
