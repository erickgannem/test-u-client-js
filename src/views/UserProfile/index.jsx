import React from 'react'

import { View, Button, Input } from '../elements'
import { ImgUserDiv, ImgBox, TitleRow, ButtonRow, InputRow } from './styled'
import { colors } from '../../assets/guideline'
import imgUser from '../../assets/User.jpg'

export default function UserProfile () {
  const { light01, blueAccent } = colors
  const DATUSER = ['Pedro Paulo', 'pedropaulo@gmail.com', '+99 (99) 9 9999-9999', 'Avenida Academia # 99, Distrito Federal']
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
        <p>
          Datos Personales
        </p>
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
        <p>
          Datos Academicos
        </p>
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

