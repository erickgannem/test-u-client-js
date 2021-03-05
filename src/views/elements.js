import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { colors } from '../assets/guideline'

const View = styled.div`
background-color: ${colors.dark02};
color: ${colors.white};
padding: 1rem;
`

const StyledButton = styled.button`
padding: 1.2rem;
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
const Button = ({ bgColor, color, borderColor, content, margin, width }) => {
  return (
    <StyledButton
      bgColor={bgColor}
      color={color}
      borderColor={borderColor}
      margin={margin}
      width={width}
    >
      <b>{content}</b>
    </StyledButton>
  )
}

Button.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  borderColor: PropTypes.string,
  content: PropTypes.string,
  margin: PropTypes.string || PropTypes.number,
  width: PropTypes.width
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

export { View, Button, Input }
