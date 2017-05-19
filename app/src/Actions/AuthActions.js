import { LOGIN_USER_SUCCEEDED, LOGIN_USER_REQUEST } from '../Util/types'

export const loginUser = (payload: Object) => ({
  type: LOGIN_USER_REQUEST,
  payload,
})

export const loginUserSuccess = (payload: Object) => ({
  type: LOGIN_USER_SUCCEEDED,
  payload,
})

