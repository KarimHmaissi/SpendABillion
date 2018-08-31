import { combineReducers } from 'redux';
import mockData from '../mockData.json';

export default combineReducers({
  items: (state = [], action) => {
    switch (action.type) {
      case 'OPEN_CATEGORY':
        return mockData.items[action.id];
      case 'CLOSE_CATEGORY':
        return [];
      default:
        return state;
    }
  },
  categories: (state = []) => state,
  data: (state = []) => state,
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
});
