import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { MAIN, LIGHT_TEXT, TINT } from './theme'

const styles = StyleSheet.create({
  voteIcons: {
    marginBottom: -20,
    marginTop: -22,
    backgroundColor: 'transparent',
  },
})

export const DisagreeIcon = () => (
  <Ionicons name="ios-thumbs-down-outline" size={20} color={MAIN} />
)

export const FeedIcon = () => (
  <SimpleLineIcons name="feed" size={46} color={MAIN} />
)

export class CreatePostIcon extends Component {
  setNativeProps(nativeProps) {
    this.createPost.setNativeProps(nativeProps)
  }

  render() {
    return (
      <View ref={thisComponent => this.createPost = thisComponent}>
        <SimpleLineIcons name="pencil" size={25} color={MAIN} />
      </View>
    )
  }
}

export const AgreeIcon = () => (
  <Ionicons name="ios-thumbs-up-outline" size={20} color={MAIN} />
)

export const MenuMore = () => (
  <MaterialIcon name="more-horiz" size={24} color={MAIN} style={{ marginBottom: 2 }} />
)
