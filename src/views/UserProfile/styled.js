import styled from 'styled-components'
import { colors } from '../../assets/guideline'

const ImgUserDiv = styled.div`
display: flex;
width: 100%;
margin-top: 1rem;
margin-bottom: 1rem;
justify-content: center;
align-items: center;
`

const ImgBox = styled.div`
height: 220px;
width: 220px;
box-sizing: border-box;
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
height: 8rem;
display: grid;
position: relative;
justify-content: center;
align-items: center;
margin-bottom:1rem;
`

export { ImgUserDiv, ImgBox, TitleRow, ButtonRow, InputRow }
