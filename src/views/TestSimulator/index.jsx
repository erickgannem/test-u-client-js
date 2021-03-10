import React from 'react'

import { View, Button } from '../elements'
import { TestRowBody, TestRow, TestTittle, InfoRow, LogoBox, ButtonsRow, SubjectsText } from './styled'
import { colors } from '../../assets/guideline'
import imgBack from '../../assets/back.png'
import imgTest from '../../assets/imgTest.png'
import imgStopwatch from '../../assets/stopwatch.png'

const DATSUBJECTS = ['- Biologia', '- Química', '- Física', '- Matematica', '- Filosofia']

export default function Exams () {
  const { dark02, light01 } = colors

  return (
    <View>
      <TestRow>
        <Button
            bgColor={dark02}
            color={light01}
            borderColor={dark02}
            content={''}
            margin='0.25rem'
            width='1rem'
            imgSource={imgBack}
          />
          <TestTittle>
            Examen simulado
          </TestTittle>
      </TestRow>
      <InfoRow>
        A continuacón será generada una prueba simulada basada en sus datos academicos. Las preguntas responderán las siguientes materias
      </InfoRow>
      <InfoRow>
        {
          DATSUBJECTS.map(option =>
            <SubjectsText
              key={option}
              content={option}
              margin="0.5rem 0 0 2rem"
              />
          )
        }
      </InfoRow>
      <TestRowBody>
        <LogoBox>
          <img src={imgTest} height="70%"/>
        </LogoBox>
        <LogoBox>
          <img src={imgStopwatch} height="70%"/>
        </LogoBox>
      </TestRowBody>
      <TestRowBody>
        <InfoRow>
          <p>60</p>
          <p>Preguntas</p>
        </InfoRow>
        <InfoRow>
          <p>120</p>
          <p>Minutos</p>
        </InfoRow>
      </TestRowBody>
      <ButtonsRow>
        <Button
          bgColor={colors.orangeAccent}
          color={colors.dark01}
          borderColor={colors.orangeAccent}
          content="CONTINUAR"
          margin='2rem'
        >
        </Button>
      </ButtonsRow>
    </View>
  )
}
