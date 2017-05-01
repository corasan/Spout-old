import React, { Component } from 'react'
import { View, Image, TextInput, Text, TouchableOpacity, StatusBar, ListView } from 'react-native'
import styles from './styles'

const dummyData = [
  {
    text: 'This is dummy data number 1',
    username: 'corasan',
    createdAt: '10 minutes ago',
    commentsQty: '15',
  },
]

export default class PostsList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
    }
  }

  renderPosts = (data) => {
    return (
      <View style={styles.postBox}>
        <Text>{data.username}</Text>
        <Text>{data.text}</Text>
      </View>
    )
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ListView
          dataSource={this.state.dataSource.cloneWithRows(dummyData)}
          renderRow={this.renderPosts}
          style={{ paddingHorizontal: 16 }}
        />
      </View>
    )
  }
 }
