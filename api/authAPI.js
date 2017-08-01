import { Alert, AsyncStorage } from 'react-native'
import { Actions, ActionConst } from 'react-native-router-flux'
import firebase from '../firebaseConfig'
import { loginUserSuccess } from '../app/src/Actions'

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
const saveUserSession = (email: string, password: string, uid: string, username: string) => {
  const user = { email, password, uid, username }

  AsyncStorage.setItem('User', JSON.stringify(user))
}

const deleteUserSession = () => {
  AsyncStorage.removeItem('User', () => {
    Actions.login({ type: ActionConst.RESET })
    console.log('Destroyed User Session')
  })
}

// Auth API Functions
// Login using email and password
export function LoginWithEmail(email: string, password: string) {
  AUTH.signInWithEmailAndPassword(email, password)
  .then((user) => {
    saveUserSession(user.email, password, user.uid, user.displayName)
    loginUserSuccess(user)
    Alert.alert(`Welcome back ${user.email}`)
  })
  .then(() => Actions.main({ type: ActionConst.REPLACE }))
  .catch(err => Alert.alert(err.message))
}

// Automatically login if the user is saved locally
export function AutoLogin(email: string, password: string) {
  LoginWithEmail(email, password)
}

// Create user account
// TODO: Username validation
// TODO: Save user session after signup
export function SignupWithEmail(newUser: { username: string, email: string, password: string, firstname: string, lastname: string }) {
  AUTH.createUserWithEmailAndPassword(newUser.email, newUser.password)
  .then((user) => {
    user.updateProfile({ displayName: newUser.username })
    saveUserToDB(user.uid, newUser.username, newUser.email, newUser.firstname, newUser.lastname)
  })
  .then(() => Alert.alert('Account created'))
  .then(() => Actions.main({ type: ActionConst.REPLACE }))
  .catch(err => console.log(err))
}

export function LogOut() {
  AUTH.signOut().then(() => deleteUserSession())
}
