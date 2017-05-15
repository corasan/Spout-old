import React from 'react'
import { Provider } from 'react-redux'
// import { createStore, applyMiddleware } from 'redux'
// import reducers from './src/Reducers'
import Routes from './src/routes'
import Store from './src/Sagas'

const Spout = () => {
  return (
    <Provider store={Store}>
      <Routes />
    </Provider>
  )
}

export default Spout
