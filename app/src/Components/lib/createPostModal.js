import React, { Component, PropTypes } from 'react'
import { View, TextInput, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native'

export default class CreatePostModal extends Component {
  static propTypes = {
    modalVisible: PropTypes.bool.isRequired,
  }

  componentWillMount() {
    this.setState({ modalVisible: this.props.modalVisible })
  }

  render() {
    return (
      <Modal
        animationType={'slide'}
        visible={this.state.modalVisible}
        onRequestClose={() => { alert('Modal has been closed.') }}
        transparent
      >
        <View>
          <Text>Modal</Text>
        </View>
      </Modal>
    )
  }
}

// const styles = StyleSheet.create({
//   modalContainer: {

//   },
// })
