import React from 'react'

import { Watchtimer } from '../watchTimer'
import { Button, ButtonHead } from '../elements'
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
            bgColor={colors.orangeAccent}
            color={colors.dark01}
            borderColor={colors.orangeAccent}
            content="CONTINUAR"
            margin='2rem 0'
            width='16rem'
          >
          </Button>
          <ButtonHead
            to='/exams'
            bgColor={colors.dark02}
            color={colors.white}
            borderColor={colors.greenAccent}
            content="VOLVER: Este botón no estará disponible en versión final"
            margin='0rem 0'
            width='23rem'
          >
          </ButtonHead>
        </ButtonsRowQst>
      </ViewQst>
      <Watchtimer/>
    </ViewHeadQst>
  )
}
