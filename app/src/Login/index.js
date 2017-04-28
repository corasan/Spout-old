import React, { Component } from 'react'
import { View, StyleSheet, Image, TextInput, Text, TouchableHighlight } from 'react-native'

export default class Login extends Component {
  render() {
    return (
      <Image source={require('../assets/login-background.png')} style={styles.container}>
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
            <Text style={styles.loginBtnText}>LOGIN</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'stretch',
    width: null,
    height: null,
    justifyContent: 'center',
    paddingHorizontal: 50,
  },
  input: {
    width: 266,
    height: 34,
    color: '#fff',
  },
  inputContainer: {
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
    height: 34,
    marginTop: 30,
  },
  loginText: {
    backgroundColor: 'transparent',
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
  },
  forgotContainer: {
    alignItems: 'flex-end',
    marginTop: 15,
  },
  forgotText: {
    color: '#fff',
    fontSize: 14,
  },
  loginBtn: {
    borderColor: '#fff',
    borderWidth: 1,
    paddingHorizontal: 80,
    paddingVertical: 10,
  },
  loginBtnText: {
    color: '#fff',
    fontSize: 18,
  },
  signupBtnText: {
    color: '#16A085',
    fontSize: 24,
    fontWeight: 'bold',
  },
})
