import {
  CREATE_POST_REQUEST,
  CREATE_POST_MODAL_VISIBLE,
  GET_POSTS_SUCCEEDED,
} from '../Util/types'
import InitialState from './initialState'

export default (state = InitialState.postState, action) => {
  switch (action.type) {
    case CREATE_POST_REQUEST:
      return { ...state, post: action.payload }
    case CREATE_POST_MODAL_VISIBLE:
      console.log(action.payload)
      return { ...state, createPostVisible: action.payload }
    case GET_POSTS_SUCCEEDED:
      return { ...state, postsAll: action.posts }
    default:
      return state
  }
}
