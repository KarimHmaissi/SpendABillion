import { combineReducers } from 'redux';

export default combineReducers({
  items: (state = []) => state,
  categories: (state = []) => state,
  selectedCategory: (state = []) => state,
});
