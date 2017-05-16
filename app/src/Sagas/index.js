import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import authSagas from './AuthSagas'
import reducers from '../Reducers'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducers, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(authSagas)

export default store
