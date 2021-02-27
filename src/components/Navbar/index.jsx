import React from 'react'
import { FaUser, FaUniversity, FaUserGraduate } from 'react-icons/fa'

import { Nav, List, Item, Link } from './styled'
import { layout } from '../../assets/guideline'

export default function Navbar () {
  const { iconSize } = layout
  return (
    <Nav>
    <List>
      <Item isActive>
        <Link to='/'><FaUserGraduate size={iconSize}/></Link>
      </Item>
      <Item>
        <Link to='/schools'><FaUniversity size={iconSize}/></Link>
      </Item>
      <Item>
        <Link to='/profile'><FaUser size={iconSize} /></Link>
      </Item>
    </List>
</Nav>
  )
}
