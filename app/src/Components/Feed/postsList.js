import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Image, Text, TouchableOpacity, ListView } from 'react-native'
import TimeAgo from 'react-native-timeago'
import { LikeIcon, CommentIcon } from '../lib/icons'

import styles from './styles'

export default class PostsList extends Component {
  static propTypes = {
    posts: PropTypes.objectOf(PropTypes.object).isRequired,
  }

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
              <Text style={styles.timeAgoText}><TimeAgo time={data.createdAt} /></Text>
            </View>
            <Text style={styles.postContentText}>{data.content}</Text>
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
          dataSource={this.state.dataSource.cloneWithRows(this.props.posts)}
          renderRow={this.renderPosts}
          enableEmptySections
          style={{ paddingHorizontal: 16 }}
        />
      </View>
    )
  }
 }
