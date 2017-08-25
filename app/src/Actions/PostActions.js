import {
  CREATE_POST_REQUEST,
  CREATE_POST_MODAL_VISIBLE,
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCEEDED,
  GET_POSTS_FAILED,
  REFRESHING_FEED,
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCEEDED,
  DELETE_POST_FAILED,
  POST_AGREE,
  POST_DISAGREE,
} from '../Util/constants'

export const createPost = (payload: Object) => ({
  type: CREATE_POST_REQUEST,
  payload,
})

export const openCreatePostModal = (payload: boolean) => ({
  type: CREATE_POST_MODAL_VISIBLE,
  payload,
})

export const getPosts = {
  REQUEST: shouldRefresh => ({ type: GET_POSTS_REQUEST, shouldRefresh }),
  SUCCEEDED: posts => ({ type: GET_POSTS_SUCCEEDED, posts }),
  FAILED: error => ({ type: GET_POSTS_FAILED, error }),
}

export const refreshingFeed = payload => ({
  type: REFRESHING_FEED,
  payload,
})

export const deletePost = {
  REQUEST: postId => ({ type: DELETE_POST_REQUEST, postId }),
  SUCCEEDED: postId => ({ type: DELETE_POST_SUCCEEDED, postId }),
  FAILED: error => ({ type: DELETE_POST_FAILED, error }),
}

export const postAgree = postId => ({
  type: POST_AGREE,
  postId,
})

export const postDisagree = post => ({
  type: POST_DISAGREE,
  post,
})
