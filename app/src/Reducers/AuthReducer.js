import { LOGIN_USER_SUCCEEDED, LOGIN_USER_REQUEST, LOGIN_USER_FAILED } from '../Util/types'

const INITIAL_STATE = {
  userLogin: {},
  loginFailed: '',
  user: {},
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_USER_REQUEST:
      return { ...state, userLogin: action.payload }
    case LOGIN_USER_SUCCEEDED:
      return { ...state, user: action.payload }
    case LOGIN_USER_FAILED:
      return { ...state, failed: action.payload }
    default:
      return state
  }
}
