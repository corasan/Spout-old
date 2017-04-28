import React, { Component } from 'react'
import { Router, Scene, Modal } from 'react-native-router-flux'

import Login from './src/Login'
import Signup from './src/Signup'

export default class Spout extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="login" component={Login} hideNavBar />
          <Scene key="signup" component={Signup} />
        </Scene>
      </Router>
    )
  }
}
