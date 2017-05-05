import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from './src/Reducers'
import Routes from './src/routes'

const Spout = () => {
  const store = createStore(reducers, {}, applyMiddleware(thunk))
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  )
}

export default Spout
