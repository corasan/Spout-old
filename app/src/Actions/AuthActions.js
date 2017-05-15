import { LOGIN_USER_SUCCEEDED, LOGIN_USER_REQUEST } from '../Util/types'

export const loginUser = (payload) => {
  return {
    type: LOGIN_USER_REQUEST,
    payload,
  }
}

