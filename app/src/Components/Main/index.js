import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import Feed from '../Feed'
import Profile from '../Profile'
import TabBar from '../lib/tabBar'

import styles from './styles'

export default class Main extends Component {
  componentWillMount() {
    StatusBar.setHidden(false)
    StatusBar.setBarStyle('light-content', true)
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <ScrollableTabView tabBarPosition="bottom" renderTabBar={() => <TabBar />} initialPage={0}>
          <Feed tabLabel="home" />
          <Profile tabLabel="user" />
          <View tabLabel="settings" />
        </ScrollableTabView>
      </View>
    )
  }
}
