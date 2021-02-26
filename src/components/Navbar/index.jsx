import React from 'react'
import { FaUser, FaUniversity, FaUserGraduate } from 'react-icons/fa'

import { Nav, List, Item, Link } from './styled'
import { layout } from '../../assets/guideline'

export default function Navbar () {
  const { iconSize } = layout
  return (
    <Nav>
    <List>
      <Item>
        <Link to='/'><FaUserGraduate size={iconSize}/></Link>
      </Item>
      <Item>
        <Link to='/about'><FaUniversity size={iconSize}/></Link>
      </Item>
      <Item>
        <Link to='/users'><FaUser size={iconSize} /></Link>
      </Item>
    </List>
</Nav>
  )
}
