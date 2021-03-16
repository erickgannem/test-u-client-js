import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { colors } from '../assets/guideline'

const ViewHeadQst = styled.div`
background-color: ${colors.dark02};
color: ${colors.white};
`
const ViewQst = styled.div`
background-color: ${colors.dark03};
color: ${colors.white};
width:100%;
padding: 2rem;
`
const TestRowQst = styled.div`
display: block;
min-height: 5rem;
margin-top: 0.5rem;
text-align: left;
padding: 0.2rem 0.7rem 1.5rem 0.7rem;
border-color: ${colors.dark02};
border-bottom: ${colors.greenAccent};
border-width: 3px;
border-style: solid;
`

const SelectQst = styled.div`
display: flex;
border-radius: 50%;
min-width: 2rem;
min-height: 2rem;
border-color: ${colors.greenAccent};
background: rgba(0, 0, 0, 0);
border-width: 3px;
border-style: solid;
margin-right: 1rem;

${this}:hover {
  cursor: pointer;
  background: ${colors.greenAccent};
}

`

const TestTittleQstRem = styled.div`
display: flex;
`

const TestTittleQst = styled.div`
margin-left: 1rem;
font-size: 2.5rem;
font-weight: 700;
`

const StyledRemainQst = styled.div`
font-size: 2.5rem;
font-weight: 700;
color: ${colors.whiteTransparency};

`
const RemainQst = ({ content }) => {
  return (
    <StyledRemainQst>
      <p>{content}</p>
    </StyledRemainQst>
  )
}

RemainQst.propTypes = {
  content: PropTypes.string
}

const TestTittleQstHead = styled.div`
margin: 1.5rem 0 0.3rem 1rem;
font-size: 1.5rem;
font-weight: 500;
color: ${colors.greenAccent};
`

const SubjectsPropsQst = styled.div`
${
  props => props.imgSource && `
  `
};
display: flex;
justify-content: left;
border-radius: 1rem;
font-size: 0.8rem;
min-height: 5rem;
padding: 0.5rem 1.5rem;
background-color: ${colors.dark01};
align-items: center;
color: ${colors.light01};
margin: ${({ margin }) => margin || 0};
`

const SubjectsTextQst = ({ margin, bgColor, color, content, imgSource }) => {
  return (
    <SubjectsPropsQst
      bgColor={bgColor}
      color={color}
      margin={margin}
      imgSource={imgSource}
    >
      {imgSource && <img src={imgSource} width="30rem" height="30rem"/>}
      <SelectQst/>
      <h1>
        {content}
      </h1>
    </SubjectsPropsQst>
  )
}

SubjectsTextQst.propTypes = {
  content: PropTypes.string,
  bgColor: PropTypes.string,
  color: PropTypes.string,
  margin: PropTypes.string,
  imgSource: PropTypes.string || undefined
}

const ButtonsRowQst = styled.div`
display: grid;
justify-content: right;
align-items: center;
padding: 0 0.5rem 0 0;
`

const SubjectsProps = styled.div`
font-size: 0.8rem;
width: 100%;
background-color: ${colors.dark02};
color: ${colors.light01};
margin: ${({ margin }) => margin || 0};
`

const SubjectsText = ({ margin, bgColor, color, content }) => {
  return (
    <SubjectsProps bgColor={bgColor} color={color} margin={margin}>
      <h1>{content}</h1>
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
font-size: 2rem;
justify-content: space-around;
align-items: center;
color: ${colors.light01};
margin-left: 0rem;
margin-right: 0rem;
margin-top: 0rem;
margin-bottom: 3rem;
`

const TestRow = styled.div`
display: flex;
width: 110%;
height: 5rem;
margin-left: -1.5rem;
margin-top: 0.5rem;
margin-bottom: 0.5rem;
justify-content: left;
align-items: center;
padding: 0.2rem 0.7rem 1.5rem 0.7rem;
border-color: ${colors.dark02};
border-bottom: ${colors.light01};
border-width: 3px;
border-style: solid;

`

const TestTittle = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 80%;
margin-left: 1rem;
font-size: 2.5rem;
font-weight: 700;
`

const View = styled.div`
background-color: ${colors.dark02};
color: ${colors.white};
padding: 1rem;
`

const StyledButton = styled.button`
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

${this}:hover {
  cursor: pointer;
}
`
const Button = ({ bgColor, color, borderColor, content, margin, width, imgSource }) => {
  return (
    <StyledButton
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
padding: 0.7rem;
border-radius: 0.2rem;
font-size: 1.2rem;
width: 18rem;
background-color: ${colors.dark01};
color: ${colors.light01};
border: none;
margin-bottom: 0.5rem;
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
  imgSource: PropTypes.string || undefined
}

const Watch = styled.div`
display: flex;
font-size: 2rem;
font-weight: 700;
padding: 0.7rem 0 0.7rem 2rem;
`
const WatchTittle = styled.div`
margin-right: 1.5rem;
`

const WatchSep = styled.div`
margin-left: 0.5rem;
margin-right: 0.5rem;
margin-top: -0.15rem;
`


const StyledWatchMin = styled.div`
margin-left: 0.15rem;
color: ${colors.greenAccent};
`
const WatchMin = ({ content }) => {
  return (
    <StyledWatchMin>
      <p>
        {content}
      </p>
    </StyledWatchMin>
  )
}

WatchMin.propTypes = {
  content: PropTypes.string
}

const StyledWatchSec = styled.div`
color: ${colors.whiteTransparency};
margin-left: 0.15rem;
`
const WatchSec = ({ content }) => {
  return (
    <StyledWatchSec>
      <p>
        {content}
      </p>
    </StyledWatchSec>
  )
}

WatchSec.propTypes = {
  content: PropTypes.string
}

export { WatchTittle, WatchSep, Watch, WatchMin, WatchSec, TestTittleQstRem, RemainQst, ViewHeadQst, ViewQst, LogoRow, LettersRow, ButtonsRow, ButtonsRowQst, Letter, SloganRow, LogoBox, View, Button, Input, TestRow, TestRowQst, TestTittle, TestTittleQst, InfoRow, TestRowBody, SubjectsText, SubjectsTextQst, TestTittleQstHead }
