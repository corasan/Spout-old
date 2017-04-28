import { Alert } from 'react-native'
import firebase from '../../../firebaseConfig'

const AUTH = firebase.auth()
const DB = firebase.database().ref('Users')

const saveUserToDB = (uid: string, username: string, email: string, firstname: string, lastname: string) => {
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
export function LoginWithEmail(email: string, password: string) {
  AUTH.signInWithEmailAndPassword(email, password)
  .then((user) => {
    console.log(user)
    Alert.alert('Successfully logged in')
  })
  .catch(err => console.log(err))
}

// Create user account
// TODO: Username validation
export function SignupWithEmail(newUser: { username: string, email: string, password: string, firstname: string, lastname: string }) {
  AUTH.createUserWithEmailAndPassword(newUser.email, newUser.password)
  .then((user) => {
    saveUserToDB(user.uid, newUser.username, newUser.email, newUser.firstname, newUser.lastname)
  })
  .then(() => Alert.alert('Successfully created your account'))
  .catch(err => console.log(err))
}
