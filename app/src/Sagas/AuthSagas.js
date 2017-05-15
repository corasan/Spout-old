import { takeEvery, put, call } from 'redux-saga/effects'
import { LOGIN_USER_SUCCEEDED, LOGIN_USER_FAILED, LOGIN_USER_REQUEST } from '../Util/types'
import { LoginWithEmail } from '../Util/api'

// import firebase from '../../../firebaseConfig'

export default function* authenticateUser() {
  yield takeEvery(LOGIN_USER_REQUEST, function* (data) {
    const email = data.payload.email
    const password = data.payload.password

    try {
      yield call(LoginWithEmail, email, password)
      yield put({ type: LOGIN_USER_SUCCEEDED, email })
    } catch (error) {
      yield put({ type: LOGIN_USER_FAILED, error })
    }
  })
}
