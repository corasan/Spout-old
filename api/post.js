import { AsyncStorage } from 'react-native'
import firebase from '../firebaseConfig'

const POSTS_DB = firebase.database().ref('Posts/')

export function CreateNewPost(content: string, onComplete: Function) {
  const postID = POSTS_DB.push().key
  const createdAt = new Date()

  AsyncStorage.getItem('User', (err, user) => {
    const currentUser = JSON.parse(user)

    POSTS_DB.child(postID).update({
      content,
      createdAt,
      owner: currentUser.uid,
      likes: 0,
    }, () => onComplete)
  })
}

export function GetAllPosts() {
  return POSTS_DB.once('value')
}
