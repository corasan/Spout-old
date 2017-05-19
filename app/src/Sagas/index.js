import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import authSagas from './AuthSagas'
import postSagas from './PostSagas'
import reducers from '../Reducers'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducers, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(authSagas)
sagaMiddleware.run(postSagas)

export default store
