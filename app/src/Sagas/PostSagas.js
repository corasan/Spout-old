import { takeEvery, put, call, fork, all, take } from 'redux-saga/effects'
import {
  GET_POSTS_REQUEST,
  DELETE_POST_REQUEST,
  POST_AGREE,
  POST_DISAGREE,
  AGREED_POST,
} from '../Util/constants'
import { GetAllPosts, DeletePost, PostAgree } from '../../../api'
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

function* postAgreeSaga() {
  yield takeEvery(POST_AGREE, function* (data) {
    // console.log('before')
    try {
      const snapshot = yield call(PostAgree, data.postId)
      // console.log('after')

      // console.log('data', snapshot.val())
      if (snapshot.val()) {
        yield put({ type: AGREED_POST, agreed: snapshot.val() })
      }
    } catch (error) {
      console.log(error)
    }
  })
}
// function* postAgreeSaga() {
//   yield takeEvery(POST_AGREE, function* (data) {
//     try {
//       yield call(PostAgree, data.postId)
//     } catch (error) {
//       yield put(postAgree.FAILED(error))
//     }
//   })
// }

// function* postDisagreeSaga() {
//   yield takeEvery(POST_DISAGREE, function* (data) {
//     try {
//       yield call(PostDisagree, data.postId)
//     } catch (error) {
//       yield put(postAgree.FAILED(error))
//     }
//   })
// }

export default function* postsRootSaga() {
  yield all([
    fork(getPostsSaga),
    fork(deletePostSaga),
    fork(postAgreeSaga),
    // fork(postDisagreeSaga),
  ])
}
