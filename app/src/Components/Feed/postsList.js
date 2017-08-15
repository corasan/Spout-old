import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Image, Text, TouchableOpacity, ListView, RefreshControl, AsyncStorage } from 'react-native'
import { connect } from 'react-redux'
import TimeAgo from 'react-native-timeago'
import Menu, { MenuContext, MenuOptions, MenuOption, MenuTrigger } from 'react-native-menu'
import { AgreeIcon, DisagreeIcon, MenuMore } from '../ui/icons'
import { getPosts, refreshingFeed, deletePost } from '../../Actions'

import styles from './styles'

class PostsList extends Component {
  static propTypes = {
    posts: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array,
    ]).isRequired,
    refreshingFeed: PropTypes.func.isRequired,
    getPosts: PropTypes.func.isRequired,
    refreshing: PropTypes.bool.isRequired,
    deletePost: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
      user: '',
    }
  }

  componentWillMount = () => {
    AsyncStorage.getItem('User', (err, data) => {
      const user = JSON.parse(data)
      this.setState({ user })
    })
  }

  renderDeletePost = (ownerUid) => {
    if (this.state.user.uid === ownerUid) {
      return (
        <MenuOption value={'Delete'}>
          <Text style={styles.deletePost}>Delete</Text>
        </MenuOption>
      )
    }
    return null
  }

  handleMenuSelect = (option, postId) => {
    if (option === 'Delete') {
      this.props.deletePost(postId)
    }
  }

  renderMenu = (uid, postId) => (
    <View>
      <Menu onSelect={value => this.handleMenuSelect(value, postId)}>
        <MenuTrigger>
          <MenuMore />
        </MenuTrigger>
        <MenuOptions>
          <MenuOption>
            <Text>Save</Text>
          </MenuOption>
          {this.renderDeletePost(uid)}
        </MenuOptions>
      </Menu>
    </View>
  )

  renderPosts = post => (
    <MenuContext>
      <View style={styles.postBox}>
        <View style={styles.postRow}>
          <View style={styles.leftCol}>
            <Image source={require('../../assets/user-male.png')} />
          </View>

          <View style={styles.rightCol}>
            <View style={styles.postHeader}>
              <Text style={styles.usernameText}>{post.owner}</Text>
              <Text style={styles.timeAgoText}><TimeAgo time={post.createdAt} /></Text>
            </View>
          </View>
        </View>

        <Text style={styles.postContentText}>{post.content}</Text>

        <View style={{ marginTop: 18, flexDirection: 'row' }}>
          <Text style={[styles.agreeAndDisagreeText, { marginRight: 6 }]}>{post.agree} agree</Text>
          <Text style={styles.agreeAndDisagreeText}>{post.disagree} disagree</Text>
        </View>

        <View style={styles.lineDivide} />

        <View style={styles.postRow}>
          <View style={[styles.postRow, { justifyContent: 'flex-start', marginTop: 4 }]}>
            <TouchableOpacity style={{ marginTop: 3.3, marginRight: 12 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.icons}>
                  <AgreeIcon />
                </View>
                <Text style={styles.agreeAndDisagreeButton}>Agree</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={[styles.icons, { marginTop: 5 }]}>
                  <DisagreeIcon />
                </View>
                <Text style={styles.agreeAndDisagreeButton}>Disagree</Text>
              </View>
              {/* <Text style={styles.commentsCount}>{post.comments}</Text> */}
            </TouchableOpacity>
          </View>

          {/* <View style={{ justifyContent: 'flex-end' }}>
            {this.renderMenu(post.ownerUid, post.id)}
          </View> */}
        </View>
      </View>
    </MenuContext>
  )

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
  deletePost: (postId) => {
    dispatch(deletePost.REQUEST(postId))
  },
})

const mapStateToProps = ({ post }) => ({
  postsAll: post.postsAll,
  refreshing: post.refreshing,
})

export default connect(mapStateToProps, mapDispatchToProps)(PostsList)

