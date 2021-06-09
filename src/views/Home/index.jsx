import React from 'react'

import { View, Button } from '../elements'
import { ButtonsRow, Letter, LettersRow, LogoRow, SloganRow, LogoBox } from './styled'
import { colors } from '../../assets/guideline'
import logoTestU from '../../assets/Test-u.svg'
import logoGoogle from '../../assets/GoogleG.svg'

export default function Login () {
  const { dark02, light01, whiteTransparency, logoAccentTransparency, logoAccent } = colors
  const LETTERS = ['T', 'E', 'S', 'T']

  return (
    <View>
      <LogoRow>
        <LogoBox>
          <img src={logoTestU} width="100%" height="100%" content-item="center"/>
        </LogoBox>
      </LogoRow>
      <LettersRow>
        {
          LETTERS.map(letter =>
            <Letter
              key={Math.random()}
              content={letter}
              bgColor={whiteTransparency}
              color={light01}
            />
          )
        }
        <Letter
          content='U'
          bgColor={logoAccentTransparency}
          color={logoAccent}
        />
      </LettersRow>
      <SloganRow>
        <span>
          Exámenes de Universidades Argentinas
        </span>
      </SloganRow>
      <ButtonsRow>
        <Button
          to="/exams"
          bgColor={dark02}
          color={light01}
          borderColor={light01}
          content="INICIAR SESION"
          margin='0.25rem'
        />
        <Button
          to='/exams'
          bgColor={dark02}
          color={light01}
          borderColor={light01}
          content="REGISTRARSE"
          margin='0.25rem'
        />
        <Button
          to='/exams'
          bgColor={colors.light01}
          color={colors.dark01}
          borderColor={light01}
          content="ENTRAR CON GOOGLE"
          margin='0.25rem'
          imgSource={logoGoogle}
        >
        </Button>
      </ButtonsRow>
    </View>
  )
}
