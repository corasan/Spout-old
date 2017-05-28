import { takeEvery, put, call, fork, all } from 'redux-saga/effects'
import {
  GET_POSTS_REQUEST,
  REFRESHING_FEED,
} from '../Util/types'
import { GetAllPosts } from '../../../api'
import { getPosts, refreshingFeed } from '../Actions'

function* getPostsSaga() {
  yield takeEvery(GET_POSTS_REQUEST, function* (data) {
    console.log('GET_POSTS_REQUEST')
    try {
      const snapshot = yield call(GetAllPosts)

      if (snapshot.val()) {
        console.log('snapshot')
        yield put(getPosts.SUCCEEDED(snapshot.val()))
        if (data.shouldRefresh) {
          console.log('IF shouldRefresh')
          yield put(refreshingFeed(false))
        }
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
