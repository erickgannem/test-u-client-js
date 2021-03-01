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
      <Route exact path='/' component={Exams} />
      <Route exact path='/schools' component={Schools} />
      <Route exact path='/profile' component={UserProfile} />
    </Switch>
  )
}