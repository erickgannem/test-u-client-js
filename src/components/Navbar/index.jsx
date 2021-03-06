import React from 'react'
import { useLocation } from 'react-router-dom'
import { FaUser, FaUniversity, FaUserGraduate } from 'react-icons/fa'

import { Nav, List, Item, Link } from './styled'
import { layout } from '../../assets/guideline'

export default function Navbar () {
  const { iconSize } = layout
  const { pathname } = useLocation()

  const validPaths = ['/exams', '/profile', '/schools']
  const shouldAppear = !!~validPaths.indexOf(pathname)

  return (
    <>
      {
        shouldAppear && (
          <Nav>
            <List>
              <Item isActive={pathname === '/exams' && true}>
                <Link to='/exams'>
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
    </>
  )
}
