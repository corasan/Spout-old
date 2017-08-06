import { AsyncStorage } from 'react-native'
import firebase from '../firebaseConfig'

const POSTS_DB = firebase.database().ref('Posts/')

export function CreateNewPost(content: string, onComplete: Function) {
  const postID = POSTS_DB.push().key
  const createdAt = Date.now()

  AsyncStorage.getItem('User', (err, user) => {
    const currentUser = JSON.parse(user)
    POSTS_DB.child(postID).set({
      id: postID,
      content,
      createdAt,
      ownerUid: currentUser.uid,
      owner: currentUser.username,
      likes: 0,
    }, () => onComplete)
  })
}

export function GetAllPosts() {
  return POSTS_DB.once('value')
}

export function DeletePost(id: string) {
  POSTS_DB.child(id).remove()
}
