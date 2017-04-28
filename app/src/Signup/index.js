import React, { Component, PropTypes } from 'react'
import { View, TextInput, Text, Modal, TouchableOpacity, Image } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { SignupWithEmail } from '../util/api'
import styles from './styles'

export default class Signup extends Component {
  static propTypes = {
    modalVisible: PropTypes.bool.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      username: '',
      firstname: '',
      lastname: '',
      email: '',
      password: '',
    }
  }

  componentWillMount() {
    this.setState({ modalVisible: this.props.modalVisible })
  }

  signup = () => {
    SignupWithEmail({
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
    })
  }

  render() {
    return (
      <Modal
        animationType={'slide'}
        transparent={false}
        visible={this.state.modalVisible}
        onRequestClose={() => { alert('Modal has been closed.') }}
      >
        <TouchableOpacity onPress={Actions.pop} style={{ zIndex: 10 }}>
          <Image source={require('../assets/close.png')} style={styles.closeModal} />
        </TouchableOpacity>

        <View style={styles.signupContainer}>
          <View style={{ alignItems: 'center' }}>
            <Image source={require('../assets/spout-logo.png')} style={styles.logo} />
          </View>

          <View>
            <Text style={styles.signupText}>Sign up</Text>
          </View>
          
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              placeholder="Username"
              value={this.state.username}
              onChangeText={username => this.setState({ username })}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="First Name"
              value={this.state.firstname}
              onChangeText={firstname => this.setState({ firstname })}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Last Name"
              value={this.state.lastname}
              onChangeText={lastname => this.setState({ lastname })}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              placeholder="Email"
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              placeholder="Password"
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
              secureTextEntry
            />
          </View>

          <View style={{ alignItems: 'center', marginTop: 60 }}>
            <TouchableOpacity onPress={() => this.signup()} style={styles.signupBtn}>
              <Text style={styles.signupBtnText}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    )
  }
}
