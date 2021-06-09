import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link as RouterLink } from 'react-router-dom'

import { colors } from '../assets/guideline'

const SubjectsProps = styled.div`
font-size: 1.5rem;
background-color: ${colors.dark02};
color: ${colors.light01};
margin: ${({ margin }) => margin || 0};
`

const SubjectsText = ({ margin, bgColor, color, content }) => {
  return (
    <SubjectsProps bgColor={bgColor} color={color} margin={margin}>
      <p>{content}</p>
    </SubjectsProps>
  )
}

SubjectsText.propTypes = {
  content: PropTypes.string,
  bgColor: PropTypes.string,
  color: PropTypes.string,
  margin: PropTypes.string
}


const TestRowBody = styled.div`
display: flex;
width: 100%;
margin-top: 0.5rem;
margin-bottom: 0.5rem;
padding: 0 12%;
justify-content: space-around;
text-align: center;
`

const InfoRow = styled.div`
font-size: 1.5rem;
justify-content: space-around;
align-items: center;
color: ${colors.light01};
margin-bottom: 3rem;
`

const TestRow = styled.div`
display: flex;
margin: 1rem 0;
justify-content: left;
align-items: center;
padding: 0.2rem 0.7rem 1.5rem 0.7rem;
border-color: ${colors.dark02};
border-bottom: ${colors.light01};
color: ${colors.light01};
border-width: 3px;
border-style: solid;

`

const TestTittle = styled.div`
display: flex;
width: 100%;
justify-content: center;
align-items: center;
font-size: 2.5rem;
font-weight: 700;
`

const View = styled.div`
background-color: ${colors.dark02};
color: ${colors.white};
padding: 1rem;
`

const StyledButton = styled(RouterLink)`
${
  props => props.imgSource && `
  display: flex;
  align-items: center;
  justify-content: space-between;
  `
};
padding: ${props => props.imgSource ? '0.8rem 1.5rem 0.8rem 0.75rem' : '1.2rem'};
border-radius: 0.20rem;
font-size: 1.5rem;
width: ${({ width }) => width || '22.75rem'};
background-color: ${({ bgColor }) => bgColor};
color: ${({ color }) => color};
border: 0.12rem solid ${({ borderColor }) => borderColor};
margin: ${({ margin }) => margin || 0};
text-align: center;
text-decoration: none;

${this}:hover {
  cursor: pointer;
}
`
const Button = ({ to, bgColor, color, borderColor, content, margin, width, imgSource }) => {
  return (
    <StyledButton
      to={to}
      bgColor={bgColor}
      color={color}
      borderColor={borderColor}
      margin={margin}
      width={width}
      imgSource={imgSource}
    >
      {imgSource && <img src={imgSource} width="15%" height="15%"/>}
      <b>{content}</b>
    </StyledButton>
  )
}

const Input = styled.input`
padding: 1.4rem;
border-radius: 0.2rem;
font-size: 1.5rem;
background-color: ${colors.dark01};
color: ${colors.light01};
border: none;
margin-bottom: 1rem;
`

const LogoRow = styled.div`
display: flex;
width: 100%;
margin-top: 1rem;
margin-bottom: 1rem;
justify-content: center;
align-items: center;
`

const LogoBox = styled.div`
display: flex;
width: 13.75rem;
justify-content: center;
justify-content: bottom;
align-items: center;

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

Button.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  borderColor: PropTypes.string,
  content: PropTypes.string,
  margin: PropTypes.string || PropTypes.number,
  width: PropTypes.string || PropTypes.number,
  imgSource: PropTypes.string || undefined,
  to: PropTypes.string
}

const StyledButtonHead = styled(RouterLink)`
${
  props => props.imgSource && `
  display: flex;
  align-items: center;
  justify-content: space-between;
  `
};
padding: ${props => props.imgSource ? '0' : '0'};
border-radius: 0.20rem;
font-size: 1.5rem;
width: ${({ width }) => width || '22.75rem'};
background-color: ${({ bgColor }) => bgColor};
color: ${({ color }) => color};
border: 0.12rem solid ${({ borderColor }) => borderColor};
margin: ${({ margin }) => margin || 0};
text-align: center;
text-decoration: none;

${this}:hover {
  cursor: pointer;
}
`
const ButtonHead = ({ to, bgColor, color, borderColor, content, margin, width, imgSource }) => {
  return (
    <StyledButtonHead
      to={to}
      bgColor={bgColor}
      color={color}
      borderColor={borderColor}
      margin={margin}
      width={width}
      imgSource={imgSource}
    >
      {imgSource && <img src={imgSource} width="100%" height="100%"/>}
      <b>{content}</b>
    </StyledButtonHead>
  )
}

ButtonHead.propTypes = {
  to: PropTypes.string,
  bgColor: PropTypes.string,
  color: PropTypes.string,
  borderColor: PropTypes.string,
  content: PropTypes.string,
  margin: PropTypes.string || PropTypes.number,
  width: PropTypes.string || PropTypes.number,
  imgSource: PropTypes.string || undefined
}

export { ButtonHead, LogoRow, LettersRow, ButtonsRow, Letter, SloganRow, LogoBox, View, Button, Input, TestRow, TestTittle, InfoRow, TestRowBody, SubjectsText }
