import React from 'react'
import { StyleSheet } from 'react-native'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { MAIN, LIGHT_TEXT } from './theme'

const styles = StyleSheet.create({
  voteIcons: {
    marginBottom: -20,
    marginTop: -22,
    backgroundColor: 'transparent',
  },
})

export const VoteUp = () => {
  return <MaterialIcon name="arrow-drop-up" size={65} color={MAIN} style={styles.voteIcons} />
}

export const VoteDown = () => {
  return <MaterialIcon name="arrow-drop-down" size={65} color={LIGHT_TEXT} style={styles.voteIcons} />
}

export const CommentIcon = () => {
  return <EvilIcons name="comment" size={42} color={MAIN} />
}
