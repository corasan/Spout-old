import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Image, Text, TouchableOpacity, ListView, RefreshControl } from 'react-native'
import { connect } from 'react-redux'
import TimeAgo from 'react-native-timeago'
import { LikeIcon, CommentIcon } from '../ui/icons'
import { getPosts, refreshingFeed } from '../../Actions'

import styles from './styles'

class PostsList extends Component {
  static propTypes = {
    posts: PropTypes.objectOf(PropTypes.object).isRequired,
    refreshingFeed: PropTypes.func.isRequired,
    getPosts: PropTypes.func.isRequired,
    refreshing: PropTypes.bool.isRequired,
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
              <Text style={styles.usernameText}>{data.owner}</Text>
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

  onRefresh = () => {
    this.props.refreshingFeed(true)
    this.props.getPosts(true)
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ListView
          dataSource={this.state.dataSource.cloneWithRows(this.props.posts)}
          renderRow={this.renderPosts}
          enableEmptySections
          style={{ paddingHorizontal: 16 }}
          refreshControl={
            <RefreshControl
              refreshing={this.props.refreshing}
              onRefresh={() => this.onRefresh()}
              tintColor="#1ABC9C"
              title="Refreshing"
              titleColor="#34495E"
            />
          }
        />
      </View>
    )
  }
 }

 const mapDispatchToProps = (dispatch: Function) => ({
  getPosts: (shouldRefresh) => {
    dispatch(getPosts.REQUEST(shouldRefresh))
  },
  refreshingFeed: (refreshing) => {
    dispatch(refreshingFeed(refreshing))
  },
})

const mapStateToProps = ({ post }) => ({
  postsAll: post.postsAll,
  refreshing: post.refreshing,
})

export default connect(mapStateToProps, mapDispatchToProps)(PostsList)

