import { AsyncStorage } from 'react-native'
import firebase from '../firebaseConfig'

const POSTS_DB = firebase.database().ref('Posts/')

const updateAgreeOrDisagree = (id: string, type: string) => {
  POSTS_DB.child(id).once('value').then((snapshot) => {
    const data = snapshot.val()
    POSTS_DB.child(id).update({ [type]: data[type] + 1 })
  })
}

export function CreateNewPost(content: string, onComplete: Function) {
  const postID = POSTS_DB.push().key
  const createdAt = Date.now()

  AsyncStorage.getItem('User', (err, user) => {
    const currentUser = JSON.parse(user)
    POSTS_DB.child(postID).set({
      id: postID,
      content,
      createdAt,
      user_id: currentUser.uid,
      author: currentUser.username,
      agree: 0,
      disagree: 0,
    }, () => onComplete)
  })
}

export function GetAllPosts() {
  return POSTS_DB.once('value')
}

export function DeletePost(id: string) {
  POSTS_DB.child(id).remove()
}

export function PostAgree(id: string) {
  updateAgreeOrDisagree(id, 'agree')
}
export function PostDisagree(id: string) {
  updateAgreeOrDisagree(id, 'disagree')
}
// make a db table with liked posts
