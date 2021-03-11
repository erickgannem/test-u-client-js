import React from 'react'

import { View, Button } from '../elements'
import { TestRowBody, TestRow, TestTittle, InfoRow, LogoBox, ButtonsRow, SubjectsText } from './styled'
import { colors } from '../../assets/guideline'

import { FaArrowLeft } from 'react-icons/fa'
import { TiStopwatch, TiThList } from 'react-icons/ti'

const DATSUBJECTS = ['- Biologia', '- Química', '- Física', '- Matematica', '- Filosofia']

export default function Exams () {
  return (
    <View>
      <TestRow>
        <FaArrowLeft size = '2.5rem'/>
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
          <TiThList size = '8rem'/>
        </LogoBox>
        <LogoBox>
          <TiStopwatch size = '8rem'/>
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
          margin='0.25rem'
          width='16rem'
        >
        </Button>
      </ButtonsRow>
    </View>
  )
}
