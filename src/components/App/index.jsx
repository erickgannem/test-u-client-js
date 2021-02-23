import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Navbar from '../Navbar'

function App () {
  return (
    <div className="App">
      <Router >
        <Navbar />
        <Switch>
          <Route exact path='/'>
            {() => <h1>Home</h1>}
          </Route>
          <Route path='/users'>
            {() => <h1>Users</h1>}
          </Route>
          <Route path='/about'>
            {() => <h1>About</h1>}
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
