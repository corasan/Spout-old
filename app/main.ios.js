import React from 'react'
import { Router, Scene } from 'react-native-router-flux'

import Login from './src/Login'
import Signup from './src/Signup'
import Feed from './src/Feed'

const Spout = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="login" component={Login} hideNavBar />
        <Scene key="signup" component={Signup} />
        <Scene key="feed" component={Feed} hideNavBar={false} title="Feed" />
      </Scene>
    </Router>
  )
}

export default Spout
