import React from 'react'

import { View, Button } from '../elements'
import { ImgUserDiv, ImgBox, TitleRow, ButtonRow, InputRow } from './styled'
import { colors } from '../../assets/guideline'
import imgUser from '../../assets/Samir.jpg'

export default function UserProfile () {
  const { light01, blueAccent } = colors
  const DATUSER = ['Samir Gannem', 'sgannem@gmail.com', '+55 (66) 9 9933-1539']
  const DATUSERACAD = ['Biologia', 'Química', 'Física']

  return (
    <View>
      <ImgUserDiv>
        <ImgBox>
          <img
            src={imgUser}
            width="100%"
            height="100%"
            content-item="center"
          />
        </ImgBox>
      </ImgUserDiv>
      <TitleRow>
        <h2>
          Datos Personales
        </h2>
      </TitleRow>
      <InputRow>
        {
          DATUSER.map(option =>
            <input
              key={option}
              defaultValue={option}
              type="text"
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
            <input
              key={option}
              defaultValue={option}
              type="text"
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
          width='10rem'
        />
      </ButtonRow>

    </View>
  )
}

