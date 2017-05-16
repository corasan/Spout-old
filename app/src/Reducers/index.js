import { combineReducers } from 'redux'
import AuthReducer from '../Reducers/AuthReducer'

export default combineReducers({
  auth: AuthReducer,
})
