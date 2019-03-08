import React from 'react';
import thunk from 'redux-thunk';
import ReactDOM from 'react-dom';
import logger from 'redux-logger';
import App from './components/App';
import { Provider } from 'react-redux';
import { rootReducer } from './reducers';
import { createStore, applyMiddleware } from 'redux';

import './index.css';

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
