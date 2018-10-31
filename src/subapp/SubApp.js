import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
// import {  applyMiddleware } from 'redux';
import reducer  from './reducers'
import App from './App'
import thunk from 'redux-thunk';


class SubApp extends Component {
  constructor(props) {
    super(props)
    this.store = createStore(reducer,
      applyMiddleware(thunk))
  }

  render() {
    return (
      <Provider store={this.store}>
        <App />
      </Provider>
    )
  }
}

export default SubApp;