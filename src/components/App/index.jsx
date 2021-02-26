import React from 'react'

import {
  BrowserRouter as Router

} from 'react-router-dom'

import Routes from '../Routes'

import Navbar from '../Navbar'


export default function App () {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes />
      </Router>
    </div>
  )
}
