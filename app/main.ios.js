import React from 'react'
import { Router, Scene } from 'react-native-router-flux'

import Login from './src/Login'
import Signup from './src/Signup'

const Spout = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="login" component={Login} hideNavBar />
        <Scene key="signup" component={Signup} />
      </Scene>
    </Router>
  )
}

export default Spout
