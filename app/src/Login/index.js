import React, { Component } from 'react'
import { View, StyleSheet, Image, TextInput, Text, TouchableHighlight } from 'react-native'
import styles from './styles'

export default class Login extends Component {
  render() {
    return (
      <Image source={require('../assets/login-background.png')} style={styles.loginContainer}>
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
          <TouchableHighlight>
            <Text style={styles.forgotText}>Forgot your password?</Text>
          </TouchableHighlight>
        </View>

        <View style={{ alignItems: 'center', marginTop: 40 }}>
          <TouchableHighlight style={styles.loginBtn}>
            <Text style={styles.loginBtnText}>Login</Text>
          </TouchableHighlight>
        </View>

        <View style={{ position: 'absolute', bottom: 60, left: 50 }}>
          <TouchableHighlight>
            <Text style={styles.signupBtnText}>Sign Up</Text>
          </TouchableHighlight>
        </View>
      </Image>
    )
  }
}
