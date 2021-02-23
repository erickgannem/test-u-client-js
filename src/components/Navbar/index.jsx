import React from 'react'
import { Link } from 'react-router-dom'

import { Nav, List, Item } from './styled'

export default function Navbar () {
  return (
      <Nav>
          <List>
            <Item>
              <Link to='/'>Home</Link>
            </Item>
            <Item>
              <Link to='/about'>About</Link>
            </Item>
            <Item>
              <Link to='/users'>Users</Link>
            </Item>
          </List>
      </Nav>
  )
}
