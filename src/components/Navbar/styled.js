import styled from 'styled-components'
import { colors } from '../../assets/guideline'

const Nav = styled.nav`
background-color: ${colors.dark01};
color: ${colors.light01};
display: flex;
height: 6rem;
width: 100%;
box-decoration-break: none;
text-decoration: none;
padding: 0 1rem;
`
const List = styled.ul`
display: flex;
padding-left: 0rem;
width: 100%;
justify-content: space-between;
align-items: center;
`

const Item = styled.li`
list-style: none
`

export { Nav, List, Item }
