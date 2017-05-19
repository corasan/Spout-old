import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Modal, View, Text, TouchableOpacity, Image } from 'react-native'
import { Actions } from 'react-native-router-flux'

import styles from './styles'

class CreatePost extends Component {
  static propTypes = {
    createPostVisible: PropTypes.bool.isRequired,
  }

  componentWillMount() {
    this.setState({ createPostVisible: this.props.createPostVisible })
  }

  closeModal = () => {
    this.setState({ createPostVisible: false })
    Actions.pop()
  }

  render() {
    return (
      <Modal
        animationType={'slide'}
        transparent
        visible={this.state.createPostVisible}
        onRequestClose={() => Actions.pop()}
      >
        <TouchableOpacity onPress={() => this.closeModal()} style={{ zIndex: 10 }}>
          <Image source={require('../assets/close.png')} style={styles.closeModal} />
        </TouchableOpacity>

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>CreatePost</Text>
        </View>
      </Modal>
    )
  }
}

export default CreatePost
