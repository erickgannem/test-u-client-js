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
font-size: 2.5rem;
justify-content: center;
align-items: center;
color: ${colors.light01};
margin-bottom: 1.5rem;
font-weight: 700;
`

const ButtonRow = styled.div`
width: 100%;
display: flex;
position: relative;
justify-content: center;
align-items: center;
`

const InputRow = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
padding: 0.5rem;
margin: 0.6rem 3rem 1.5rem 3rem;
`

export { ImgUserDiv, ImgBox, TitleRow, ButtonRow, InputRow }
