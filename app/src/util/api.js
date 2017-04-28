import { Alert } from 'react-native'
import firebase from '../../../firebaseConfig'

const AUTH = firebase.auth()
const DB = firebase.database().ref('Users')

const saveUserToDB = (uid: String, username: String, email: String, firstname: String, lastname: String) => {
  DB.child(uid).set({
    uid,
    username,
    email,
    firstname,
    lastname,
  })
}

// Auth API Functions
// Login using email and password
export function LoginWithEmail(email: String, password: String) {
  AUTH.signInWithEmailAndPassword(email, password)
  .then((user) => {
    console.log(user)
    Alert.alert('Successfully logged in')
  })
  .catch(err => console.log(err))
}

// Create user account
// TODO: Username validation
export function SignupWithEmail(username: String, email: String, password: String, firstname: String, lastname: String) {
  AUTH.createUserWithEmailAndPassword(email, password)
  .then((user) => {
    saveUserToDB(user.uid, username, email, firsname, lastname)
  })
  .then(() => Alert.alert('Successfully created your account'))
  .catch(err => console.log(err))
}
