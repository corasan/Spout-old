import { combineReducers } from 'redux'
import AuthReducer from '../Reducers/AuthReducer'
import PostReducer from '../Reducers/PostReducer'

export default combineReducers({
  auth: AuthReducer,
  post: PostReducer,
})
