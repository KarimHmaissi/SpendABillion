import { combineReducers } from 'redux';

export default combineReducers({
  items: (state = [], action) => {
    switch (action.type) {
      case 'BUY_SOMETHING':
        return state.map((item) => {
          if (item._id === action.productId) {
            return { ...item, purchased: true };
          }
          return item;
        });
      case 'LOAD_MORE':
        return [...state, ...action.items];
      default:
        return state;
    }
  },
  categories: (state = [], action) => {
    switch (action.type) {
      //     case 'BUY_SOMETHING':
      //       const item = category.items.find(item => item._id === action._id);

      //       return state.map((cat) => {
      //         const category = cat;
      //         if (category.id === action.category) {
      //           item.purchased = true;
      //           return category;
      //         }

      //         if(category.id === owned) {
      //           const itemTobeAdded = category.items.find(item => item._id === action._id);
      //           category.items.push(itemTobeAdded);
      //           return category;
      //         }

      //         return category;
      //       });
      case 'LOAD_MORE':
        return state.map((cat) => {
          const category = cat;
          if (category.id === action.category) {
            category.pageNumber += 1;
            return category;
          }
          return category;
        });

      default:
        return state;
    }
  },
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
  modalOpen: (state = true, action) => {
    switch (action.type) {
      case 'TOGGLE_MODAL':
        return !state;
      default:
        return state;
    }
  },
});
