import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import LandingPage from './components/LandingPage'
import Authorizing from './containers/Authorizing'

import './normalize.css'

function App() {
  return (
    <Router>
      <Route path = '/auth' component={Authorizing} />
      <Route path = '/home' render={
          routeProps => routeProps.location.state.access_token
        } />
      <Route exact path = '/' component={LandingPage} />
    </Router>
  )
}

export default App;
