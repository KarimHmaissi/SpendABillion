import '../scss/index.scss';
import React from 'react';
import reactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import App from './app';

import mockData from './mockData.json';

const initState = {
  categories: mockData.categories,
  items: mockData.items,
  selectedCategory: 'false',
  amountLeft: 1000000000,
  leftActive: false,
  modalOpen: true,
};

/* eslint-disable no-underscore-dangle */
// const store = createStore(
//   rootReducer,
//   initState,
//   compose(
//     window.__REDUX_DEVTOOLS_EXTENSION__
//       && window.__REDUX_DEVTOOLS_EXTENSION__(),
//     applyMiddleware(thunk),
//   ),
// );

const store = createStore(
  rootReducer,
  initState,
  applyMiddleware(thunk),
);
/* eslint-enable */

reactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
