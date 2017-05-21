import {
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCEEDED,
  CREATE_POST_MODAL_VISIBLE,
} from '../Util/types'
import InitialState from './initialState'

export default (state = InitialState.postState, action) => {
  switch (action.type) {
    case CREATE_POST_REQUEST:
      return { ...state, post: action.payload }
    case CREATE_POST_SUCCEEDED:
      return { ...state, user: action.payload }
    case CREATE_POST_MODAL_VISIBLE:
      console.log(action.payload)
      return { ...state, createPostVisible: action.payload }
    default:
      return state
  }
}
