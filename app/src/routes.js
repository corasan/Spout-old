import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, Alert, View, AsyncStorage } from 'react-native'
import { Router, Scene, Actions } from 'react-native-router-flux'
import { MAIN } from './Components/lib/theme'
import { CreatePostIcon } from './Components/lib/icons'

import Login from './Components/Login'
import Signup from './Components/Signup'
import Main from './Components/Main'
import CreatePost from './Components/CreatePost'

export default class Routes extends Component {
  constructor() {
    super()
    this.state = {
      createPostVisible: false,
    }
  }

  renderRightButton = () => {
    return (
      <View>
        <TouchableOpacity onPress={() => Actions.createPost({ createPostVisible: true })}>
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
            component={Main}
            hideNavBar={false}
            title="Feed"
            hideBackImage
            renderRightButton={() => this.renderRightButton()}
          />
          <Scene key="createPost" component={CreatePost} hideNavBar />
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
