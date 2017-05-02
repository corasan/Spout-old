import React, { Component } from 'react'
import { View, Image, TextInput, Text, TouchableOpacity, StatusBar } from 'react-native'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import PostsList from './postsList'

import styles from './styles'

export default class Feed extends Component {
  componentWillMount() {
    StatusBar.setHidden(false)
    StatusBar.setBarStyle('light-content', true)
  }

  render() {
    return (
      <View style={styles.feedContainer}>
        <ScrollableTabView tabBarPosition="bottom">
          <PostsList tabLabel="Feed" />
          <View tabLabel="Second" />
          <View tabLabel="Third" />
        </ScrollableTabView>
      </View>
    )
  }
}
