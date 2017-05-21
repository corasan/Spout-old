import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, TouchableOpacity, Alert, View, AsyncStorage } from 'react-native'
import { Router, Scene, Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'
import { MAIN } from './Components/lib/theme'
import { CreatePostIcon } from './Components/lib/icons'

import { openCreatePostModal } from './Actions'

import Login from './Components/Login'
import Signup from './Components/Signup/'
import Main from './Components/Main'
import CreatePost from './Components/CreatePost'

class Routes extends Component {
  static propTypes = {
    openCreatePostModal: PropTypes.func.isRequired,
    createPostVisible: PropTypes.bool.isRequired,
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.createPostVisible !== nextProps.createPostVisible) {
      Actions.createPost()
    }
  }

  openCreatePost = () => {
    this.props.openCreatePostModal(!this.props.createPostVisible)
  }

  renderRightButton = () => {
    return (
      <View>
        <TouchableOpacity onPress={() => this.openCreatePost()}>
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

const mapDispatchToProps = (dispatch: Function) => ({
  openCreatePostModal: (visible) => {
    dispatch(openCreatePostModal(visible))
  },
})

const mapStateToProps = ({ post }) => ({
  createPostVisible: post.createPostVisible,
})

export default connect(mapStateToProps, mapDispatchToProps)(Routes)

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
