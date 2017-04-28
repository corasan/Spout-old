import { Alert } from 'react-native'
import firebase from '../../../firebaseConfig'

export function LoginWithPassword(email: String, password: String) {
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((user) => {
    console.log(user)
    Alert.alert('Successfully logged in')
  })
}
