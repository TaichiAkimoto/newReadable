import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux'
import reducer from './reducers'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { persistStore, autoRehydrate } from 'redux-persist'
import localForage from "localforage"

let store = compose(
  applyMiddleware(logger, thunk),
  autoRehydrate()
)(createStore)(reducer);
persistStore(store, {storage: localForage})

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
