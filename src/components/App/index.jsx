import React from 'react'
import {
  BrowserRouter as Router

} from 'react-router-dom'
import Routes from '../Routes'
import Navbar from '../Navbar'

import SelectedTabContext from '../../context/SelectedTabContext'

export default function App () {
  const [pathname, setPathname] = React.useState('/')
  return (
    <div className="App">
      <Router>
        <SelectedTabContext.Provider value={{ pathname, setPathname }}>
          <Navbar />
          <Routes />
        </SelectedTabContext.Provider>

      </Router>
    </div>
  )
}
