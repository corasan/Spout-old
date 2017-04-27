import React, { Component } from 'react'
import { Router, Scene } from 'react-native-router-flux'

import Login from './src/Login'

export default class Spout extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="login" component={Login} hideNavBar />
        </Scene>
      </Router>
    )
  }
}
