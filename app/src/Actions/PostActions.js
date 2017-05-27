import {
  CREATE_POST_REQUEST,
  CREATE_POST_MODAL_VISIBLE,
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCEEDED,
  GET_POSTS_FAILED,
} from '../Util/types'

export const createPost = (payload: Object) => ({
  type: CREATE_POST_REQUEST,
  payload,
})

export const openCreatePostModal = (payload: boolean) => ({
  type: CREATE_POST_MODAL_VISIBLE,
  payload,
})

export const getPosts = {
  REQUEST: () => ({ type: GET_POSTS_REQUEST }),
  SUCCEEDED: posts => ({ type: GET_POSTS_SUCCEEDED, posts }),
  FAILED: error => ({ type: GET_POSTS_FAILED, error }),
}
