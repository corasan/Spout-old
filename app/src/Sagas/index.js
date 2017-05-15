import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import authSaga from './AuthSagas'
import reducers from '../Reducers'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducers, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(authSaga)

export default store
