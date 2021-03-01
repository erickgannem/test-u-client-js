import React from 'react'
import { FaUser, FaUniversity, FaUserGraduate } from 'react-icons/fa'

import { Nav, List, Item, Link } from './styled'
import { layout } from '../../assets/guideline'

import SelectedTabContext from '../../context/SelectedTabContext'

export default function Navbar () {
  const { iconSize } = layout
  const selectedTabContext = React.useContext(SelectedTabContext)

  const { pathname } = selectedTabContext

  return (
    <Nav>
      <List>
        <Item isActive={pathname === '/' && true}>
          <Link to='/'>
            <FaUserGraduate size={iconSize}/>
          </Link>
        </Item>

        <Item isActive={pathname === '/schools' && true}>
          <Link to='/schools'>
            <FaUniversity size={iconSize}/>
          </Link>
        </Item>

        <Item isActive={pathname === '/profile' && true}>
          <Link to='/profile'>
            <FaUser size={iconSize} />
          </Link>
        </Item>
      </List>
    </Nav>
  )
}
