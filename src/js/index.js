import '../scss/index.scss';
// import cluster from 'clusterize.js';
import React from 'react';
import reactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import App from './app';

import mockData from './mockData.json';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer,
  mockData,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

reactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
