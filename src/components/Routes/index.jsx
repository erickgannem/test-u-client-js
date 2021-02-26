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
      <Exams />
    </Route>
    <Route path='/schools'>
      <Schools />
    </Route>
    <Route path='/profile'>
      <UserProfile />
    </Route>
  </Switch>
  )
}
