import React from 'react'

import { ViewQst, ViewHeadQst, Button, Watch } from '../elements'
import { WatchMin, WatchSec, TestTittleQstRem, RemainQst, TestRowQst, TestTittleQst, InfoRow, ButtonsRowQst, SubjectsTextQst, TestTittleQstHead } from './styled'
import { colors } from '../../assets/guideline'

const DATSUBJECTS = ['La membrana interna posee mayor lípido', 'La membrana interna es más permeable qe la externa', 'La membrana interna no posee pliegues', 'La membrana interna posee la ATP sintasa para la sintesis de ATP']

export default function Exams () {
  return (
    <ViewHeadQst>
      <TestRowQst>
          <TestTittleQstHead>
            Prueba simulada
          </TestTittleQstHead>
          <TestTittleQstRem>
            <TestTittleQst>
              Pregunta 1
            </TestTittleQst>
            <RemainQst
              content="/60"
            />
          </TestTittleQstRem>
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
        </ButtonsRowQst>
      </ViewQst>
      <Watch>
        Tiempo restante
      <WatchMin
        content=" 58 :"
      />
      <WatchSec
        content=" 25"
      />
      </Watch>
    </ViewHeadQst>
  )
}
