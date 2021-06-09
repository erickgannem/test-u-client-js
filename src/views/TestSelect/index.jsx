import React from 'react'

import { View, Button, ButtonHead } from '../elements'
import { SubjectsTextQst } from '../TestSimulated/styled'
import { TestRow, TestTittle, InfoRow, ButtonsRow } from './styled'
import { colors } from '../../assets/guideline'

// import { FaArrowLeft } from 'react-icons/fa'
// import { TiStopwatch, TiThList } from 'react-icons/ti'
import backArrow from '../../assets/arrowLeft48.png'

const DATSUBJECTS = ['- Biologia', '- Química', '- Física', '- Matematica', '- Filosofia']

export default function Exams () {
  return (
    <>
      <TestRow>
        <ButtonHead
          to='/exams'
          bgColor={colors.dark01}
          color={colors.white}
          borderColor={colors.dark01}
          margin='0 0'
          width='2,5rem'
          imgSource={backArrow}
        />
        <TestTittle>
          Examen por temas
          </TestTittle>
      </TestRow>
      <View>

        <InfoRow>
          A continuacón será generada una prueba simulada basada en las materias seleccionas. Por favos seleccione las materias y haga click en continuar.
          {
            DATSUBJECTS.map((option, index) =>
              <SubjectsTextQst
                key={option}
                content={option}
                margin="0"
              />
            )
          }
          La cantidad de preguntas y el tiempo estará condicionado a los temas seleccionados.
        </InfoRow>
        <ButtonsRow>
          <Button
            to='/TestSimulated'
            bgColor={colors.orangeAccent}
            color={colors.dark01}
            borderColor={colors.orangeAccent}
            content="CONTINUAR"
            margin='4rem 0'
            width='16rem'
          />
        </ButtonsRow>
      </View>
    </>
  )
}
