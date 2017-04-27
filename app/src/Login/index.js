import React, { Component } from 'react'
import { View, StyleSheet, Image } from 'react-native'

export default class Login extends Component {
  render() {
    return (
      // <View style={styles.container}>
      // </View>
      <Image source={require('../assets/login-background.png')} style={styles.container}>
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
  },
})
