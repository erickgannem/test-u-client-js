import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Navbar from '../Navbar'
import Exams from '../../views/Exams'
import Schools from '../../views/Schools'
import UserProfile from '../../views/UserProfile'

export default function App () {
  return (
    <div className="App">
      <Router >
        <Navbar />
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
      </Router>
    </div>
  )
}
