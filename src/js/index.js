import '../scss/index.scss';
import React from 'react';
import reactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import App from './app';

import { buildArray } from './util';

import mockData from './mockData.json';

const initState = {
  categories: mockData.categories,
  items: mockData.items,
  selectedCategory: 'false',
  data: buildArray(),
  amountLeft: 1000000000,
  leftActive: false,
};

/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer,
  initState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

reactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
