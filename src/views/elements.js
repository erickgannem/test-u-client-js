import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { colors } from '../assets/guideline'

const View = styled.div`
background-color: ${colors.dark02};
color: ${colors.white};
padding: 1rem;
`


const Button = ({ bgColor, color, borderColor, content }) => {
  const Btn = styled.button`
  padding: 1.2rem;
  border-radius: 0.20rem;
  font-size: 1.2rem;
  border: none;
  background-color: ${bgColor};
  color: ${color};
  border: 0.12rem solid ${borderColor};
  
  ${this}:hover {
    cursor: pointer;
  }
  `
  return (
    <Btn>
      <b>{content}</b>
    </Btn>
  )
}

Button.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  borderColor: PropTypes.string,
  content: PropTypes.string
}

export { View, Button }
