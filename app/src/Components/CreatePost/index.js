import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Modal, View, Text, TouchableOpacity, Image, TextInput, Dimensions, Alert } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'
import { openCreatePostModal } from '../../Actions'
import { CreateNewPost } from '../../../../api'

import styles from './styles'

const charLimit = 240
const { width } = Dimensions.get('window')

class CreatePost extends Component {
  static propTypes = {
    openCreatePostModal: PropTypes.func.isRequired,
    createPostVisible: PropTypes.bool.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      content: '',
    }
  }

  renderCharactersLeft = () => {
    const left = charLimit - this.state.content.length
    return (
      <Text style={[styles.charsLeft, { color: left <= 10 ? 'red' : '#34495E' }]}>{left}</Text>
    )
  }

  closeModal = () => {
    this.props.openCreatePostModal(!this.props.createPostVisible)
    Actions.pop()
  }

  createNewPost = () => {
    if (this.state.content === '') {
      Alert.alert('Write something first!')
      return null
    }
    CreateNewPost(this.state.content, this.closeModal())
  }

  render() {
    return (
      <Modal
        animationType={'slide'}
        transparent={false}
        visible={this.props.createPostVisible}
        onRequestClose={() => Actions.pop()}
      >
        <TouchableOpacity onPress={() => this.closeModal()} style={styles.closeModalBtn}>
          <Image source={require('../../assets/close.png')} style={styles.closeModalIcon} />
        </TouchableOpacity>

        <View style={styles.createPostContainer}>
          <Text style={styles.tellTheWorld}>Tell us what you are feeling... Let it out!</Text>
          <View style={{ width: width - 40 }}>
            <TextInput
              multiline
              autoFocus
              maxLength={charLimit}
              returnKeyType="send"
              onContentSizeChange={(event) => {
                this.setState({ height: event.nativeEvent.contentSize.height })
              }}
              onKeyPress={(event) => {
                if (event.nativeEvent.key === 'Enter') {
                  this.createNewPost()
                }
              }}
              onChangeText={(content) => {
                this.setState({ content })
              }}
              value={this.state.content}
              style={[styles.postInput, { height: Math.max(140, this.state.height) }]}
            />
            <View style={{ position: 'absolute', right: 4, bottom: 2, opacity: 0.2 }}>
              {this.renderCharactersLeft()}
            </View>
          </View>

          <View style={styles.sendPostBtnContainer}>
            <TouchableOpacity style={styles.senPostBtn} onPress={() => this.createNewPost()}>
              <Text style={styles.sendPostText}>Post</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    )
  }
}

const mapDispatchToProps = (dispatch: Function) => ({
  openCreatePostModal: (visible) => {
    dispatch(openCreatePostModal(visible))
  },
})

const mapStateToProps = ({ post }) => ({
  createPostVisible: post.createPostVisible,
})

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost)
