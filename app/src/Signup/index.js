import React, { Component } from 'react'
import { View, TextInput, Text, Modal, TouchableOpacity, Image } from 'react-native'
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
          <View style={{ alignItems: 'center' }}>
            <Image source={require('../assets/spout-logo.png')} style={styles.logo} />
          </View>
          {/* <TouchableOpacity onPress={Actions.pop}>
            <Text>X</Text>
          </TouchableOpacity> */}

          <View>
            <Text style={styles.signupText}>Sign up</Text>
          </View>

          <View style={styles.inputContainer}>
            <TextInput style={styles.input} autoCapitalize="none" placeholder="First Name" />
          </View>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} autoCapitalize="none" placeholder="Last Name" />
          </View>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} autoCapitalize="none" placeholder="Email" />
          </View>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} autoCapitalize="none" placeholder="Password" />
          </View>
          
          <View style={{ alignItems: 'center', marginTop: 60 }}>
            <TouchableOpacity onPress={Actions.pop} style={styles.signupBtn}>
              <Text style={styles.signupBtnText}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    )
  }
}
