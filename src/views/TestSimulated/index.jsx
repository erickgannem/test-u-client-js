import React from 'react'

import { ViewQst, ViewHeadQst, Button } from '../elements'
import { TestRowQst, TestTittleQst, InfoRow, ButtonsRowQst, SubjectsTextQst, TestTittleQstHead } from './styled'
import { colors } from '../../assets/guideline'
import select from '../../assets/checked.svg'

const DATSUBJECTS = ['La membrana interna posee mayor lípido', 'La membrana interna es más permeable qe la externa', 'La membrana interna no posee pliegues', 'La membrana interna posee la ATP sintasa para la sintesis de ATP']

export default function Exams () {
  return (
    <ViewHeadQst>
      <TestRowQst>
          <TestTittleQstHead>
            Prueba simulada
          </TestTittleQstHead>
          <TestTittleQst>
            Pregunta 1
          </TestTittleQst>
      </TestRowQst>
      <ViewQst>
        <InfoRow>
          La membrana mitocondrial interna se diferencia de la externa dado que:
        </InfoRow>
          {
            DATSUBJECTS.map(option =>
              <SubjectsTextQst
                key={option}
                content={option}
                margin="2rem 1rem 2rem 0.5rem"
                imgSource={select}
                />
            )
          }
        <ButtonsRowQst>
          <Button
            bgColor={colors.greenAccent}
            color={colors.dark01}
            borderColor={colors.greenAccent}
            content="CONTINUAR"
            margin='2rem -0.25rem 2rem 0'
            width='16rem'
          >
          </Button>
        </ButtonsRowQst>
      </ViewQst>
    </ViewHeadQst>
  )
}
