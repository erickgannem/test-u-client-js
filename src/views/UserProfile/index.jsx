import React from 'react'

import { View, Button, Input } from '../elements'
import { ImgUserDiv, ImgBox, TitleRow, ButtonRow, InputRow } from './styled'
import { colors } from '../../assets/guideline'
import imgUser from '../../assets/Samir.jpg'

export default function UserProfile () {
  const { light01, blueAccent } = colors
  const DATUSER = ['Samir Gannem', 'erickgannem@gmail.com', '+55 (66) 9 9933-1539', 'Endereco']
  const DATUSERACAD = ['Biologia', 'Química', 'Física', 'matematica']

  return (
    <View>
      <ImgUserDiv>
        <ImgBox
            src={imgUser}
            width="100%"
            height="100%"
        />
      </ImgUserDiv>
      <TitleRow>
        <h2>
          Datos Personales
        </h2>
      </TitleRow>
      <InputRow>
        {
          DATUSER.map(option =>
            <Input
              key={option}
              defaultValue={option}
            />
          )
        }
      </InputRow>
      <TitleRow>
        <h2>
          Datos Academicos
        </h2>
      </TitleRow>
      <InputRow>
        {
          DATUSERACAD.map(option =>
            <Input
              key={option}
              defaultValue={option}
              />
          )
        }
      </InputRow>
      <ButtonRow>
        <Button
          bgColor={blueAccent}
          color={light01}
          borderColor={blueAccent}
          content='SALVAR'
          margin='0.25rem'
          width='16rem'
        />
      </ButtonRow>

    </View>
  )
}

