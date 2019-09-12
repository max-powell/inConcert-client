import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import LandingPage from './components/LandingPage'

import './normalize.css'

function App() {
  return (
    <Router>
      <Route path = '/' component={LandingPage} />
    </Router>
  )
}

export default App;
