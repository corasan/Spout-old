import { takeEvery, put, call, fork, all } from 'redux-saga/effects'
import {
  GET_POSTS_REQUEST,
  GET_POST_AUTHOR_REQUEST,
} from '../Util/constants'
import { GetAllPosts, GetPostAuthor } from '../../../api'
import { getPosts, refreshingFeed, getPostAuthor } from '../Actions'

function* getPostsSaga() {
  yield takeEvery(GET_POSTS_REQUEST, function* (data) {
    try {
      const snapshot = yield call(GetAllPosts)

      if (snapshot.val()) {
        yield put(getPosts.SUCCEEDED(snapshot.val()))
        if (data.shouldRefresh) {
          yield put(refreshingFeed(false))
        }
      }
    } catch (error) {
      yield put(getPosts.FAILED(error))
    }
  })
}

function* getPostAuthorSaga() {
  yield takeEvery(GET_POST_AUTHOR_REQUEST, function* (data) {
    try {
      const snapshot = yield call(GetPostAuthor, data.authorUid)
      console.log('SNAPSHOT', snapshot.val().username)

      if (snapshot.val()) {
        yield put(getPostAuthor.SUCCEEDED(snapshot.val().username))
      }
    } catch (error) {
      yield put(getPostAuthor.FAILED(error))
    }
  })
}

export default function* postsRootSaga() {
  yield all([
    fork(getPostsSaga),
    fork(getPostAuthorSaga),
  ])
}
