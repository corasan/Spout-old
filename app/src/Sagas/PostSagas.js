import { takeEvery, put, call, fork, all } from 'redux-saga/effects'
import { CREATE_POST_REQUEST } from '../Util/types'

function* requestCreatePostSaga() {
  yield takeEvery(CREATE_POST_REQUEST, function* (data) {
    console.log(data)
  })
}

export default function* authRootSaga() {
  yield all([
    fork(requestCreatePostSaga),
  ])
}
