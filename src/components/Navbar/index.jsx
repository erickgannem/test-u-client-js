import React from 'react'
import { useLocation } from 'react-router-dom'
import { FaUser, FaUniversity, FaUserGraduate } from 'react-icons/fa'

import { Nav, List, Item, Link } from './styled'
import { layout } from '../../assets/guideline'

export default function Navbar () {
  const { iconSize } = layout
  const { pathname } = useLocation()

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
