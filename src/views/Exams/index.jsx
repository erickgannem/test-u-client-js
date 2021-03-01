import React from 'react'

import { View, Button } from '../elements'
import { colors } from '../../assets/guideline'


export default function Exams () {
  const { dark02, light01 } = colors
  return (
    <View>
      <h1>Exams Section</h1>
      <Button bgColor={dark02} color={light01} borderColor={light01}>
        <b>SIMULAR EXAMEN</b>
      </Button>
      <Button>
        <b>EXAMEN ALEATORIO</b>
      </Button>
      <Button>
        <b>EXAMEN POR TEMAS</b>
      </Button>
    </View>
  )
}
