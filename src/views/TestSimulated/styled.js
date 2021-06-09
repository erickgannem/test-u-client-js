import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { colors } from '../../assets/guideline'
import { Letter, LettersRow, LogoRow, SloganRow, LogoBox, InfoRow, TestRowBody } from '../elements'

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
font-size: 1.5rem;
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
      <p>
        {content}
      </p>
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
width: 100%;
display: flex;
gap: 1rem;
position: relative;
justify-content: center;
align-items: center;


// width: 100%;
// flex: wrap;
// gap: 1rem;
// flex-direction: right;
// justify-content: right;
// align-items: right;
// justify-items: right;
// padding: 0 0.5rem 0 0;
`

export { ViewQst, ViewHeadQst, TestTittleQstRem, RemainQst, ButtonsRowQst, Letter, LettersRow, LogoRow, SloganRow, LogoBox, TestRowQst, TestTittleQst, InfoRow, TestRowBody, SubjectsTextQst, TestTittleQstHead }
