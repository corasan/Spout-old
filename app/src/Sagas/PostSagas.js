import { takeEvery, put, call, fork, all } from 'redux-saga/effects'
import {
  GET_POSTS_REQUEST,
  DELETE_POST_REQUEST,
} from '../Util/constants'
import { GetAllPosts, DeletePost } from '../../../api'
import { getPosts, refreshingFeed, deletePost } from '../Actions'

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

function* deletePostSaga() {
  yield takeEvery(DELETE_POST_REQUEST, function* (data) {
    try {
      yield call(DeletePost, data.postId)
      yield put(deletePost.SUCCEEDED(data.postId))
    } catch (error) {
      yield put(deletePost.FAILED(error))
    }
  })
}

export default function* postsRootSaga() {
  yield all([
    fork(getPostsSaga),
    fork(deletePostSaga),
  ])
}
