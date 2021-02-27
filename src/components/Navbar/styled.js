import styled from 'styled-components'
import { colors } from '../../assets/guideline'
import { Link as RouterLink } from 'react-router-dom'

const Nav = styled.nav`
background-color: ${colors.dark01};
color: ${colors.light01};
/* height: 6rem; */
width: 100%;
box-decoration-break: none;
text-decoration: none;
display: grid;
position: relative;
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
  ({ isActive }) => isActive ? `0.3rem solid ${colors.greenAccent}` : 'none'
};

`

const Link = styled(RouterLink)`
  transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  color: ${colors.light01};
  ${this}:hover {
    color: ${colors.white}
  }
`

export { Nav, List, Item, Link }
