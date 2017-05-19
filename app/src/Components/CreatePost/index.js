import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Modal, View, Text, TouchableOpacity, Image, TextInput, StatusBar } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'
import { postModalVisible } from '../../Actions'

import styles from './styles'
// import { CreateNewPost } from '../../../../api'

class CreatePost extends Component {
  static propTypes = {
    postModalVisible: PropTypes.func,
    createPostVisible: PropTypes.bool,
  }

  static defaultProps = {
    postModalVisible: false,
    createPostVisible: false,
  }

  constructor(props) {
    super(props)
    this.state = {
      content: '',
    }
  }

  componentWillMount() {
    StatusBar.setBarStyle('dark-content', true)
  }

  componentWillUnmount() {
    StatusBar.setBarStyle('light-content', true)
  }

  closeModal = () => {
    // this.setState({ createPostVisible: false })
    this.props.postModalVisible(!this.props.createPostVisible)
    Actions.pop()
  }

  render() {
    return (
      <Modal
        animationType={'slide'}
        transparent
        visible={this.props.createPostVisible}
        onRequestClose={() => Actions.pop()}
      >
        <TouchableOpacity onPress={() => this.closeModal()} style={styles.closeModalBtn}>
          <Image source={require('../assets/close.png')} style={styles.closeModalIcon} />
        </TouchableOpacity>

        <View style={styles.createPostContainer}>
          <Text>CreatePost</Text>
          <TextInput
            multiline
            autoFocus
            maxLength={300}
            returnKeyType="send"
            onContentSizeChange={(event) => {
              this.setState({ height: event.nativeEvent.contentSize.height })
            }}
            onKeyPress={(event) => {
              if (event.nativeEvent.key === 'Enter') {
                // this.createPost()
              }
            }}
            onChangeText={(content) => {
              console.log(content)
              this.setState({ content })
            }}
            value={this.state.content}
            style={[styles.postTextContent, { height: Math.max(100, this.state.height) }]}
          />

        </View>
      </Modal>
    )
  }
}

const mapDispatchToProps = (dispatch: Function) => ({
  postModalVisible: (visible) => {
    dispatch(postModalVisible(visible))
  },
})

const mapStateToProps = ({ post }) => ({
  createPostVisible: post.createPostVisible,
})

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost)
