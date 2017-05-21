import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { View, TextInput, Text, Modal, TouchableOpacity, Image } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { SignupWithEmail } from '../../../../api'
import { openSignupModal } from '../../Actions/AuthActions'
import styles from './styles'
// TODO: make my own Text component with default font
export default class Signup extends Component {
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
      <View>
        <TouchableOpacity onPress={Actions.pop} style={styles.closeModalBtn}>
          <Image source={require('../assets/close.png')} style={styles.closeModalIcon} />
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
      </View>
    )
  }
}
