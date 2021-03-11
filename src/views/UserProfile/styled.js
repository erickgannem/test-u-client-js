import styled from 'styled-components'
import { colors } from '../../assets/guideline'

const ImgUserDiv = styled.div`
display: flex;
width: 100%;
margin-top: 3rem;
margin-bottom: 2rem;
justify-content: center;
align-items: center;
`

const ImgBox = styled.img`
height: 15rem;
width: 15rem;
border-radius: 50%;

`

const TitleRow = styled.div`
display: flex;
font-size: 1.15rem;
justify-content: center;
align-items: center;
color: ${colors.light01};
margin-bottom: 0.2rem;
`

const ButtonRow = styled.div`
width: 100%;
display: grid;
position: relative;
justify-content: center;
align-items: center;
`

const InputRow = styled.div`
width: 100%;
display: grid;
position: relative;
justify-content: center;
align-items: center;
padding: 0.5rem;
margin-bottom: 1.5rem;
margin-top: 0.6rem;
`

export { ImgUserDiv, ImgBox, TitleRow, ButtonRow, InputRow }
