import {
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCEEDED,
  CREATE_POST_MODAL_VISIBLE,
} from '../Util/types'

const INITIAL_STATE = {
  post: {},
  createPostVisible: false,
}

export default (state = INITIAL_STATE, action) => {
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
