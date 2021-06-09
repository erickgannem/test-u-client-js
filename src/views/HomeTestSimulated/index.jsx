import React from 'react'

import { View, Button, ButtonHead } from '../elements'
import { ImageBox, TestRowBody, TestRow, TestTittle, InfoRow, ButtonsRow, SubjectsText } from './styled'
import { colors } from '../../assets/guideline'

// import { FaArrowLeft } from 'react-icons/fa'
import { TiStopwatch, TiThList } from 'react-icons/ti'
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
        {/* </TestRow>  <FaArrowLeft size='2.5rem' />
        </ButtonHead> */}
        <TestTittle>
          Examen aleatorio
          </TestTittle>
      </TestRow>
      <View>

        <InfoRow>
          A continuacón será generada una prueba aleatoria podría no estar basada en sus datos academicos. Las preguntas podrán o no incluir las siguientes materias.
          Haga click en continuar cuando esté listo.
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
          <ImageBox>
            <TiThList size='5.5rem' />
          </ImageBox>
          <ImageBox>
            <TiStopwatch size='5.5rem' />
          </ImageBox>
        </TestRowBody>
        <TestRowBody>
          <ImageBox>
            <p>60</p>
            <p>Preguntas</p>
          </ImageBox>
          <ImageBox>
            <p>120</p>
            <p>Minutos</p>
          </ImageBox>
        </TestRowBody>
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
