import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './src/Reducers'
import Routes from './src/routes'

const Spout = () => {
  const store = createStore(reducers, {})
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  )
}

export default Spout
