import {
  LOGIN_USER_SUCCEEDED,
  LOGIN_USER_REQUEST,
  LOGIN_USER_FAILED,
  REFRESHING_FEED,
} from '../Util/constants'
import InitialState from './initialState'

export default (state = InitialState.authState, action) => {
  switch (action.type) {
    case LOGIN_USER_REQUEST:
      return { ...state, userLogin: action.payload }
    case LOGIN_USER_SUCCEEDED:
      return { ...state, user: action.payload }
    case LOGIN_USER_FAILED:
      return { ...state, failed: action.payload }
    case REFRESHING_FEED:
      return { ...state, refreshing: action.payload }
    default:
      return state
  }
}
