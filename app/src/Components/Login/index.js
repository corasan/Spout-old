import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Image, TextInput, Text, TouchableOpacity, StatusBar, AsyncStorage, Dimensions } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'
import { AutoLogin } from '../../../../api/'
import { loginUser } from '../../Actions/AuthActions'

import styles from './styles'

const { height } = Dimensions.get('window')

class Login extends Component {
  static propTypes = {
    loginUser: PropTypes.func.isRequired,
    authBackground: PropTypes.number.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
  }

  componentWillMount() {
    StatusBar.setBarStyle('light-content', true)
    AsyncStorage.getItem('User', (err, user) => {
      if (user) {
        const currentUser = JSON.parse(user)
        AutoLogin(currentUser.email, currentUser.password)
      }
    })
  }

  login = () => {
    this.props.loginUser({ email: this.state.email, password: this.state.password })
  }

  render() {
    return (
      <Image source={this.props.authBackground} style={styles.loginContainer}>
        <View style={styles.loginBoxContainer}>
          <View style={{ alignItems: 'center', marginVertical: 12 }}>
            <Image source={require('../../assets/logo-login.png')} style={styles.logo} />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              keyboardType="email-address"
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

          <View style={styles.forgotContainer}>
            <TouchableOpacity>
              <Text style={styles.forgotText}>Forgot your password?</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.loginBtnContainer}>
            <TouchableOpacity style={styles.loginBtn} onPress={() => this.login()}>
              <Text style={styles.loginBtnText}>LOGIN</Text>
            </TouchableOpacity>
          </View>

        </View>

        <View style={{ position: 'absolute', top: height - 50 }}>
          <TouchableOpacity onPress={Actions.signup}>
            <Text style={styles.signupBtnText}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </Image>
    )
  }
}

const mapDispatchToProps = (dispatch: Function) => ({
  loginUser: (userCred) => {
    dispatch(loginUser(userCred))
  },
})

const mapStateToProps = ({ auth }) => ({
  authBackground: auth.authBackground,
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
