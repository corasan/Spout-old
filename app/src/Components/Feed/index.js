import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { getPosts } from '../../Actions'
import PostsList from './postsList'

import styles from './styles'

class Feed extends Component {
  componentWillMount() {
    this.props.getPosts(false)
  }

  render() {
    return (
      <View style={styles.feedContainer}>
        <PostsList posts={this.props.postsAll} />
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch: Function) => ({
  getPosts: (shouldRefresh) => {
    dispatch(getPosts.REQUEST(shouldRefresh))
  },
})

const mapStateToProps = ({ post }) => ({
  postsAll: post.postsAll,
})

export default connect(mapStateToProps, mapDispatchToProps)(Feed)
