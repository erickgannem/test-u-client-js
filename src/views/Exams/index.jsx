import React from 'react'

import { View, Button } from '../elements'
import { ButtonsRow, Letter, LettersRow, LogoRow, SloganRow, LogoBox } from './styled'
import { colors } from '../../assets/guideline'
import logoTestU from '../../assets/Test-u.svg'

export default function Exams () {
  const { dark02, light01, whiteTransparency, logoAccentTransparency, logoAccent } = colors
  const LETTERS = ['T', 'E', 'S', 'T']

  return (
    <View>
      <LogoRow>
        <LogoBox>
          <img src={logoTestU} width="100%" height="100%" content-item="center" />
        </LogoBox>
      </LogoRow>
      <LettersRow>
        {
          LETTERS.map(letter =>
            <Letter
              key={Math.random()}
              content={letter}
              bgColor={whiteTransparency}
              color={light01}
            />
          )
        }
        <Letter
          content='U'
          bgColor={logoAccentTransparency}
          color={logoAccent}
        />
      </LettersRow>
      <SloganRow>
        <span>
          Exámenes de Universidades Argentinas
        </span>
      </SloganRow>
      <ButtonsRow>
        <Button
          to='/TestSimulator'
          bgColor={dark02}
          color={light01}
          borderColor={light01}
          content='SIMULAR EXAMEN'
          margin='0.25rem'
        />
        <Button
          to='/HomeTestSimulated'
          bgColor={dark02}
          color={light01}
          borderColor={light01}
          content='EXAMEN ALEATORIO'
          margin='0.25rem'
        />
        <Button
          to='/TestSelect'
          bgColor={dark02}
          color={light01}
          borderColor={light01}
          content='EXAMEN POR TEMAS'
          margin='0.25rem'
        />
      </ButtonsRow>

    </View>
  )
}
