import React from 'react'
import { Link } from 'react-router-dom'
import { FaUser, FaUniversity, FaUserGraduate } from 'react-icons/fa'

import { Nav, List, Item } from './styled'
import { colors, layout } from '../../assets/guideline'

export default function Navbar () {
  const { light01 } = colors
  const { iconSize } = layout
  return (
    <Nav>
    <List>
      <Item>
        <Link to='/'><FaUserGraduate className='homeIcon' size={iconSize}/></Link>
      </Item>
      <Item>
        <Link to='/about'><FaUniversity className='homeIcon' size={iconSize}/></Link>
      </Item>
      <Item>
        <Link to='/users'><FaUser size={iconSize} color={light01}/></Link>
      </Item>
    </List>
</Nav>
  )
}
