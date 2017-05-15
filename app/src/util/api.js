import { Alert, AsyncStorage } from 'react-native'
import { Actions } from 'react-native-router-flux'
import firebase from '../../../firebaseConfig'
import { loginUserSuccess } from '../Actions'

const AUTH = firebase.auth()
const USERS_DB = firebase.database().ref('Users')

const saveUserToDB = (uid: string, username: string, email: string, firstname: string, lastname: string) => {
  USERS_DB.child(uid).set({
    uid,
    username,
    email,
    firstname,
    lastname,
  })
}
// Save user login info locally. Used to save the user session
const saveUserSession = (email: string, password: string, uid: string) => {
  const user = { email, password, uid }

  AsyncStorage.setItem('User', JSON.stringify(user))
}

// Auth API Functions
// Login using email and password
export function LoginWithEmail(email: string, password: string, cb?: Function = null) {
  AUTH.signInWithEmailAndPassword(email, password)
  .then((user) => {
    if (cb != null) {
      cb(user)
    }
    saveUserSession(user.email, password, user.uid)
    loginUserSuccess(user)
    Alert.alert(`Logged in as ${user.email}`)
  })
  .then(() => Actions.main())
  .catch(err => console.log(err))
}

// Automatically login if the user is saved locally
export function AutoLogin(email: string, password: string) {
  LoginWithEmail(email, password)
}

// Create user account
// TODO: Username validation
export function SignupWithEmail(newUser: { username: string, email: string, password: string, firstname: string, lastname: string }) {
  AUTH.createUserWithEmailAndPassword(newUser.email, newUser.password)
  .then((user) => {
    saveUserToDB(user.uid, newUser.username, newUser.email, newUser.firstname, newUser.lastname)
  })
  .then(() => Alert.alert('Account created'))
  .then(() => Actions.main())
  .catch(err => console.log(err))
}
