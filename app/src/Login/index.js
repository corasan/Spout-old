import React, { Component } from 'react'
import { View, Image, TextInput, Text, TouchableOpacity, StatusBar } from 'react-native'
import { Actions } from 'react-native-router-flux'
import styles from './styles'

export default class Login extends Component {
  componentWillMount() {
    StatusBar.setHidden(true)
  }

  render() {
    return (
      <Image source={require('../assets/login-background.png')} style={styles.loginContainer}>
        <View style={{ alignItems: 'center' }}>
          <Image source={require('../assets/spout-logo-white.png')} style={styles.logo} />
        </View>
        <View>
          <Text style={styles.loginText}>Login</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput style={styles.input} autoCapitalize="none" keyboardType="email-address" />
        </View>

        <View style={styles.inputContainer}>
          <TextInput style={styles.input} autoCapitalize="none" secureTextEntry />
        </View>

        <View style={styles.forgotContainer}>
          <TouchableOpacity>
            <Text style={styles.forgotText}>Forgot your password?</Text>
          </TouchableOpacity>
        </View>

        <View style={{ alignItems: 'center', marginTop: 40 }}>
          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginBtnText}>Login</Text>
          </TouchableOpacity>
        </View>

        <View style={{ position: 'absolute', bottom: 60, left: 50 }}>
          <TouchableOpacity onPress={() => Actions.signup({ modalVisible: true })}>
            <Text style={styles.signupBtnText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </Image>
    )
  }
}
