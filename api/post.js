// import { Alert, AsyncStorage } from 'react-native'
// import { Actions } from 'react-native-router-flux'
import firebase from '../firebaseConfig'

const POSTS_DB = firebase.database().ref('Posts')

export function CreateNewPost(content: string, cb?: Function = null) {
  const postID = POSTS_DB.push().key
  const createdAt = new Date()
  const owner = firebase.auth().currentUser

  POSTS_DB.child(postID).update({
    content,
    createdAt,
    owner,
    likes: 0,
  }, () => {
    if (cb !== null) cb()
  })
}
