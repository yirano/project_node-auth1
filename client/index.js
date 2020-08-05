import React from 'react'
import { render } from 'react-dom'
import App from "./Components/App"
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducer from './Components/Utils/reducer'
import { BrowserRouter as Router } from 'react-router-dom'

const store = createStore(reducer, applyMiddleware(thunk))

render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
  , document.querySelector('#root'))

