import React, { Component } from 'react'
import { View, TextInput, Text, Modal, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'
import styles from './styles'

export default class Signup extends Component {
  componentWillMount() {
    this.setState({ modalVisible: this.props.modalVisible })
  }

  render() {
    return (
      <Modal
        animationType={'slide'}
        transparent={false}
        visible={this.state.modalVisible}
        onRequestClose={() => { alert('Modal has been closed.') }}
      >
        <View style={styles.signupContainer}>
          <TouchableOpacity onPress={Actions.pop}>
            <Text>Signup</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    )
  }
}
