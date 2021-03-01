import React from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'

import Exams from '../../views/Exams'
import Schools from '../../views/Schools'
import UserProfile from '../../views/UserProfile'

export default function Routes () {
  return (
    <Switch>
      <Route exact path='/'>
        {
          ({ location }) => {
            return <Exams pathname={location.pathname}/>
          }
        }
      </Route>
      <Route path='/schools'>
        {
          ({ location }) => {
            return <Schools pathname={location.pathname}/>
          }
        }
      </Route>
      <Route path='/profile'>
        {
          ({ location }) => {
            return <UserProfile pathname={location.pathname}/>
          }
        }
      </Route>
    </Switch>
  )
}
