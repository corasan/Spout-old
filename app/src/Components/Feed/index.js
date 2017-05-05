import React, { Component } from 'react'
import { View, Image, TextInput, Text, TouchableOpacity, StatusBar } from 'react-native'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import PostsList from './postsList'
import TabBar from '../lib/tabBar'

import styles from './styles'

export default class Feed extends Component {
  componentWillMount() {
    StatusBar.setHidden(false)
    StatusBar.setBarStyle('light-content', true)
  }

  render() {
    return (
      <View style={styles.feedContainer}>
        <ScrollableTabView tabBarPosition="bottom" renderTabBar={() => <TabBar />} initialPage={0}>
          <PostsList tabLabel="home" />
          <View tabLabel="user" />
          <View tabLabel="settings" />
        </ScrollableTabView>
      </View>
    )
  }
}
