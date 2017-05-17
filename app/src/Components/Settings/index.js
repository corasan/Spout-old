import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Image, TextInput, Text, TouchableOpacity } from 'react-native'

import { LogOut } from '../../../../api'

class Settings extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings</Text>
        <TouchableOpacity onPress={() => LogOut()}>
          <Text>Log out</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Settings
