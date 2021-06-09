import React from 'react'

import { Watchtimer } from '../watchTimer'
import { Button } from '../elements'
import { ViewQst, ViewHeadQst, TestTittleQstRem, RemainQst, TestRowQst, TestTittleQst, InfoRow, ButtonsRowQst, SubjectsTextQst, TestTittleQstHead } from './styled'
import { colors } from '../../assets/guideline'

const TOTALQUESTIONS = ['/'].concat([String(60)])
const DATSUBJECTS = [
  '1',
  'La membrana mitocondrial interna se diferencia de la externa dado que:',
  'La membrana interna posee mayor lípido',
  'La membrana interna es más permeable qe la externa',
  'La membrana interna no posee pliegues',
  'La membrana interna posee la ATP sintasa para la sintesis de ATP'
]

export default function Exams () {
  return (
    <ViewHeadQst>
      <TestRowQst>
          <TestTittleQstHead>
            Prueba simulada
          </TestTittleQstHead>
          <TestTittleQstRem>
            <TestTittleQst>
              {'Pregunta '.concat(DATSUBJECTS[0])}
            </TestTittleQst>
            <RemainQst
              content={TOTALQUESTIONS}
            />
          </TestTittleQstRem>
      </TestRowQst>
      <ViewQst>
        <InfoRow>
          {DATSUBJECTS[1]}
        </InfoRow>
        {
          DATSUBJECTS.map((option, index) =>
            index > 1 &&
            <SubjectsTextQst
              key={option}
              content={option}
              margin="2rem 0"
            />
          )
        }
        <ButtonsRowQst>
          <Button
            bgColor={colors.greenAccent}
            color={colors.dark01}
            borderColor={colors.greenAccent}
            content="CONTINUAR"
            margin='2rem 0'
            width='16rem'
          >
          </Button>
          <Button
            to='/exams'
            bgColor={colors.orangeAccent}
            color={colors.dark01}
            borderColor={colors.orangeAccent}
            content="ABANDONAR"
            margin='2rem 0'
            width='16rem'
          >
          </Button>
        </ButtonsRowQst>
      </ViewQst>
      <Watchtimer/>
    </ViewHeadQst>
  )
}
