import {
  CREATE_POST_REQUEST,
  CREATE_POST_MODAL_VISIBLE,
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCEEDED,
  GET_POSTS_FAILED,
  REFRESHING_FEED,
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
