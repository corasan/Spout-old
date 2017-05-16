import { takeEvery, put, call, fork, all } from 'redux-saga/effects'
import { LOGIN_USER_SUCCEEDED, LOGIN_USER_FAILED, LOGIN_USER_REQUEST } from '../Util/types'
import { LoginWithEmail } from '../Util/api'

function* requestUserAuth() {
  yield takeEvery(LOGIN_USER_REQUEST, function* (data) {
    const email = data.payload.email
    const password = data.payload.password

    try {
      yield call(LoginWithEmail, email, password)
    } catch (error) {
      yield put({ type: LOGIN_USER_FAILED, error })
    }
  })
}

function* succeededUserAuth() {
  // yield put({ type: LOGIN_USER_SUCCEEDED, email })
}

export default function* authRootSaga() {
  yield all([
    fork(requestUserAuth),
    fork(succeededUserAuth),
  ])
}
