import { takeEvery, put, call, fork, all } from 'redux-saga/effects'
import {
  GET_POSTS_REQUEST,
} from '../Util/types'
import { GetAllPosts } from '../../../api'
import { getPosts } from '../Actions'

function* getPostsSaga() {
  yield takeEvery(GET_POSTS_REQUEST, function* () {
    try {
      const snapshot = yield call(GetAllPosts)

      if (snapshot.val()) {
        yield put(getPosts.SUCCEEDED(snapshot.val()))
      }
    } catch (error) {
      yield put(getPosts.FAILED(error))
    }
  })
}

export default function* postsRootSaga() {
  yield all([
    fork(getPostsSaga),
  ])
}
