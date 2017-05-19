import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Modal, View, Text, TouchableOpacity, Image, TextInput, StatusBar, Alert } from 'react-native'
import { Actions } from 'react-native-router-flux'

import styles from './styles'

class CreatePost extends Component {
  static propTypes = {
    createPostVisible: PropTypes.bool.isRequired,
  }

  componentWillMount() {
    StatusBar.setBarStyle('dark-content', true)
    this.setState({ createPostVisible: this.props.createPostVisible })
  }

  componentWillUnmount() {
    StatusBar.setBarStyle('light-content', true)
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
        <TouchableOpacity onPress={() => this.closeModal()} style={styles.closeModalBtn}>
          <Image source={require('../assets/close.png')} style={styles.closeModalIcon} />
        </TouchableOpacity>

        <View style={styles.createPostContainer}>
          <Text>CreatePost</Text>
          <TextInput
            multiline
            autoFocus
            maxLength={300}
            returnKeyType="send"
            onContentSizeChange={(event) => {
              this.setState({ height: event.nativeEvent.contentSize.height })
            }}
            onKeyPress={(event) => {
              if (event.nativeEvent.key === 'Enter') {
                this.closeModal()
              }
            }}
            style={[styles.postTextContent, { height: Math.max(100, this.state.height) }]}
          />

        </View>
      </Modal>
    )
  }
}

export default CreatePost