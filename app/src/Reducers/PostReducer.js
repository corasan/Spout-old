import {
  CREATE_POST_REQUEST,
  CREATE_POST_MODAL_VISIBLE,
  GET_POSTS_SUCCEEDED,
  GET_POSTS_REQUEST,
  GET_POST_AUTHOR,
} from '../Util/constants'
import InitialState from './initialState'

export default (state = InitialState.postState, action) => {
  switch (action.type) {
    case CREATE_POST_REQUEST:
      return { ...state, post: action.payload }
    case CREATE_POST_MODAL_VISIBLE:
      return { ...state, createPostVisible: action.payload }
    case GET_POSTS_REQUEST:
      return { ...state, shouldRefresh: action.shouldRefresh }
    case GET_POSTS_SUCCEEDED:
      return { ...state, postsAll: action.posts }
    case GET_POST_AUTHOR:
      return { ...state, postAuthor: action.author }
    default:
      return state
  }
}
