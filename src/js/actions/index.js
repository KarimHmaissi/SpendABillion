import { getItems } from '../services/API';

export const toggleCategory = id => ({
  type: 'OPEN_CATEGORY',
  id,
});

export const viewOwned = () => ({
  type: 'OPEN_CATEGORY',
  id: 'owned',
});

export const closeCategory = () => ({
  type: 'CLOSE_CATEGORY',
});

export const buySomething = (amount, productId) => ({
  type: 'BUY_SOMETHING',
  amount,
  productId,
});

export const showLeft = active => ({
  type: 'SHOW_LEFT',
  active,
});

export const toggleModal = active => ({
  type: 'TOGGLE_MODAL',
});


export const loadMore = (category, pageNumber) => (dispatch) => {
  return getItems(category, pageNumber).then((items) => {
    dispatch({
      type: 'LOAD_MORE',
      category,
      items,
    });
  });
};
