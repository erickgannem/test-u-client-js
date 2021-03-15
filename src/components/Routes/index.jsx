import React from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'

import Home from '../../views/Home'
import Exams from '../../views/Exams'
import Schools from '../../views/Schools'
import UserProfile from '../../views/UserProfile'
import TestSimulator from '../../views/TestSimulator'
import TestSimulated from '../../views/TestSimulated'

export default function Routes () {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/exams' component={Exams} />
      <Route exact path='/schools' component={Schools} />
      <Route exact path='/profile' component={UserProfile} />
      <Route exact path='/TestSimulator' component={TestSimulator} />
      <Route exact path='/TestSimulated' component={TestSimulated} />
    </Switch>
  )
}
