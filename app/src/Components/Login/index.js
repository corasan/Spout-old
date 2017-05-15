import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Image, TextInput, Text, TouchableOpacity, StatusBar } from 'react-native'
import { Actions } from 'react-native-router-flux'
// import { LoginWithEmail } from '../../Util/api'
import { connect } from 'react-redux'
import { loginUser } from '../../Actions/AuthActions'

import styles from './styles'

class Login extends Component {
  static propTypes = {
    loginUser: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
  }

  componentWillMount() {
    StatusBar.setHidden(true)
  }

  login = () => {
    this.props.loginUser({ email: this.state.email, password: this.state.password })
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

        <View style={{ alignItems: 'center', marginTop: 40 }}>
          <TouchableOpacity style={styles.loginBtn} onPress={() => this.login()}>
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

export default connect(null, { loginUser })(Login)
