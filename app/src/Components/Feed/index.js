import React, { Component } from 'react'
import { View } from 'react-native'
import PostsList from './postsList'

import styles from './styles'

export default class Feed extends Component {
  render() {
    return (
      <View style={styles.feedContainer}>
        <PostsList />
      </View>
    )
  }
}
