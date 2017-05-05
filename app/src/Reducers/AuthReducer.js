import { LOGIN_USER } from '../Util/types'

const INITIAL_STATE = {
  email: '',
  password: '',
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, email: action.payload }
    default:
      return state
  }
}
