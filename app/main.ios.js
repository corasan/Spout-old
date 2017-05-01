import React from 'react'
import { StyleSheet } from 'react-native'
import { Router, Scene } from 'react-native-router-flux'
import { MAIN } from './src/lib/theme'

import Login from './src/Login'
import Signup from './src/Signup'
import Feed from './src/Feed'

const Spout = () => {
  return (
    <Router navigationBarStyle={styles.navBar} titleStyle={styles.title}>
      <Scene key="root">
        <Scene key="login" component={Login} hideNavBar />
        <Scene key="signup" component={Signup} />
        <Scene key="feed" component={Feed} hideNavBar={false} title="Feed" />
      </Scene>
    </Router>
  )
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: MAIN,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
})

export default Spout
