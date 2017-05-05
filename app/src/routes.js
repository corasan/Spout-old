import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, Alert, View, Modal, Text } from 'react-native'
import { Router, Scene } from 'react-native-router-flux'
import { MAIN } from './Components/lib/theme'
import { CreatePostIcon } from './Components/lib/icons'
import CreatePostModal from './Components/lib/createPostModal'

import Login from './Components/Login'
import Signup from './Components/Signup'
import Feed from './Components/Feed'

export default class Routes extends Component {
  constructor() {
    super()
    this.state = {
      modalVisible: false,
    }
  }

  renderRightButton = () => {
    return (
      <View>
        <TouchableOpacity onPress={() => Alert.alert('PRESSED')}>
          <CreatePostIcon />
        </TouchableOpacity>
      </View>
    )
  }

  render() {
    return (
      <Router navigationBarStyle={styles.navBar} titleStyle={styles.title}>
        <Scene key="root">
          <Scene key="login" component={Login} hideNavBar />
          <Scene key="signup" component={Signup} />
          <Scene
            key="main"
            component={Feed}
            hideNavBar={false}
            title="Feed"
            hideBackImage
            renderRightButton={() => this.renderRightButton()}
          />
        </Scene>
      </Router>
    )
  }
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
