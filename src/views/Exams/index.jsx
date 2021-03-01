import React from 'react'

import { View, Button } from '../elements'
import { colors } from '../../assets/guideline'


export default function Exams () {
  const { dark02, light01 } = colors
  const OPTIONS = ['SIMULAR EXAMEN', 'EXAMEN ALEATORIO', 'EXAMEN POR TEMAS']
  return (
    <View>
      <h1>Exams Section</h1>
      {
        OPTIONS.map(option =>
          <Button
            key={option}
            bgColor={dark02}
            color={light01}
            borderColor={light01}
            content={option}
          />
        )
      }


    </View>
  )
}
