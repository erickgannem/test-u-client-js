import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from '../../assets/guideline'
import logoGoogle from '../../assets/GoogleG.svg'


const StyledButtonG = styled.button`
display: flex;
align-items: center;
justify-content: space-between;
padding: 0.8rem 1.5rem 0.8rem 1.5rem;
border-radius: 0.20rem;
font-size: 1.2rem;
width: ${({ width }) => width || '19.75rem'};
background-color: ${({ bgColor }) => bgColor};
color: ${({ color }) => color};
border: 0.12rem solid ${({ borderColor }) => borderColor};
margin: ${({ margin }) => margin || 0};

${this}:hover {
  cursor: pointer;
}
`
const ButtonG = ({ bgColor, color, borderColor, content, margin, width }) => {
  return (
    <StyledButtonG
      bgColor={bgColor}
      color={color}
      borderColor={borderColor}
      margin={margin}
      width={width}
    >
      <img src={logoGoogle} width="40rem" height="40rem"/>
      <b>{content}</b>
    </StyledButtonG>
  )
}

ButtonG.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  borderColor: PropTypes.string,
  content: PropTypes.string,
  margin: PropTypes.string || PropTypes.number,
  width: PropTypes.width
}

const LogoRow = styled.div`
display: flex;
width: 100%;
margin-top: 1rem;
margin-bottom: 1rem;
justify-content: center;
align-items: center;
`

const LogoBox = styled.div`
width: 220px;
`

const LettersRow = styled.div`
display: flex;
justify-content: center;
margin-bottom: 0.5rem;
`

const SloganRow = styled.div`
display: flex;
font-size: 1.15rem;
justify-content: center;
align-items: center;
color: ${colors.light01};
margin-bottom: 2rem;
`

const ButtonsRow = styled.div`
width: 100%;
display: grid;
position: relative;
justify-content: center;
align-items: center;
`

const StyledLetter = styled.div`
padding: 0.25rem 0;
opacity: 20;
width: 3.6rem;
font-size:1.5rem;
justify-content: center;
align-items: center;
text-align: center;
background-color: ${({ bgColor }) => bgColor};
color: ${({ color }) => color};
border-radius: 0.2rem;
margin: 0 0.2rem;
`
const Letter = ({ bgColor, color, content }) => {
  return (
    <StyledLetter bgColor={bgColor} color={color}>
      <h1>{content}</h1>
    </StyledLetter>
  )
}

Letter.propTypes = {
  content: PropTypes.string,
  bgColor: PropTypes.string,
  color: PropTypes.string
}

export { ButtonG, LogoRow, LettersRow, ButtonsRow, Letter, SloganRow, LogoBox }
