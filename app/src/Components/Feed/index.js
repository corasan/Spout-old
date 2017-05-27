import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { getPosts } from '../../Actions'
import PostsList from './postsList'

import styles from './styles'

class Feed extends Component {
  componentWillMount() {
    this.props.getPosts()
  }

  render() {
    console.log(this.props)
    return (
      <View style={styles.feedContainer}>
        <PostsList posts={this.props.postsAll} />
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch: Function) => ({
  getPosts: () => {
    dispatch(getPosts.REQUEST())
  },
})

const mapStateToProps = ({ post }) => ({
  postsAll: post.postsAll,
})

export default connect(mapStateToProps, mapDispatchToProps)(Feed)
