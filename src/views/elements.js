import styled from 'styled-components'

import { colors } from '../assets/guideline'

const View = styled.div`
background-color: ${colors.dark02};
color: ${colors.white};
padding: 1rem;
`

const Button = styled.button`
padding: 1.2rem;
border-radius: 0.20rem;
font-size: 1.2rem;
border: none;
background-color: ${({ bgColor }) => bgColor};
color: ${({ color }) => color};
border: ${({ borderColor }) => `0.12rem solid ${borderColor}`};

${this}:hover {
  cursor: pointer;
}
`

export { View, Button }
