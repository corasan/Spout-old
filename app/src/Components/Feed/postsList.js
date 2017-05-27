import React, { Component } from 'react'
import { View, Image, Text, TouchableOpacity, ListView } from 'react-native'
import { LikeIcon, CommentIcon } from '../lib/icons'

import styles from './styles'

const dummyData = [
  {
    postContent: 'This is dummy data number 1',
    username: 'corasan',
    createdAt: '10 minutes ago',
    commentsCount: '15',
    votes: '53',
  },
  {
    postContent: 'This is dummy data number 2, this a longer post. I should used lorem ipsum for this but meh.',
    username: 'henrypl95',
    createdAt: '2 days ago',
    commentsCount: '34',
    votes: '76',
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
        <View style={styles.postRow}>
          <View style={styles.leftCol}>
            <Image source={require('../../assets/user-male.png')} />
          </View>

          <View style={styles.rightCol}>
            <View style={styles.postHeader}>
              <Text style={styles.usernameText}>{data.username}</Text>
              <Text style={styles.timeAgoText}>{data.createdAt}</Text>
            </View>
            <Text style={styles.postContentText}>{data.postContent}</Text>
          </View>
        </View>

        <View style={[styles.postRow, { justifyContent: 'flex-end', marginTop: 8 }]}>
          <TouchableOpacity style={{ marginTop: 3.3, marginRight: 12 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={styles.icons}>
                <LikeIcon />
              </View>
              <Text style={styles.likeAndCommentText}>Like</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={styles.icons}>
                <CommentIcon />
              </View>
              <Text style={styles.likeAndCommentText}>Comments</Text>
            </View>
            <Text style={styles.commentsCount}>{data.commentsCount}</Text>
          </TouchableOpacity>
        </View>
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
// <Image source={require('../assets/up.png')} style={[styles.votes, { marginBottom: -6 }]} />
// <Image source={require('../assets/down-gray.png')} style={[styles.votes, { marginTop: -6 }]} />
