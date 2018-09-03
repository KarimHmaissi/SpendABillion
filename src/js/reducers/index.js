import { combineReducers } from 'redux';
// import mockData from '../mockData.json';

export default combineReducers({
  items: (state = [], action) => {
    switch (action.type) {
      case 'BUY_SOMETHING':
        return state.map(
          item => (item.id === action.productId ? { ...item, purchased: true } : item),
        );
      default:
        return state;
    }
  },
  categories: (state = []) => state,
  selectedCategory: (state = [], action) => {
    switch (action.type) {
      case 'OPEN_CATEGORY':
        return action.id;
      case 'CLOSE_CATEGORY':
        return 'false';
      default:
        return state;
    }
  },
  data: (state = []) => state,
  amountLeft: (state = 1000000000, action) => {
    switch (action.type) {
      case 'BUY_SOMETHING':
        return state - action.amount;
      default:
        return state;
    }
  },
  leftActive: (state = false, action) => {
    switch (action.type) {
      case 'SHOW_LEFT':
        return action.active;
      default:
        return state;
    }
  },
});
