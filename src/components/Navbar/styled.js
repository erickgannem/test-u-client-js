import styled from 'styled-components'
import { colors } from '../../assets/guideline'
import { Link as RouterLink } from 'react-router-dom'

const { dark01, light01, shadow, white, logoAccent } = colors

const Nav = styled.nav`
background-color: ${dark01};
color: ${light01};
width: 100%;
box-decoration-break: none;
text-decoration: none;
display: grid;
position: relative;
box-shadow: inset 1rem 0.5rem 0.9rem ${shadow};
`
const List = styled.ul`
display: flex;
padding-left: 0rem;
width: 100%;
justify-content: space-between;
align-items: center;
`

const Item = styled.li`
list-style: none;
padding: 1rem;
border-bottom: ${
  ({ isActive }) => isActive ? `0.3rem solid ${logoAccent}` : `0.3rem solid ${dark01}`
};

`

const Link = styled(RouterLink)`
  transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  color: ${light01};
  ${this}:hover {
    color: ${white}
  }
`

export { Nav, List, Item, Link }
