import { connect } from 'react-redux';

import LeftWrapper from '../components/LeftWrapper';
import {
  toggleCategory,
  closeCategory,
  buySomething,
  showLeft,
  loadMore,
} from '../actions';

const mapStateToProps = (state) => {
  const selectedCategory = state.categories.find(
    category => category.id === state.selectedCategory,
  );

  const items = state.selectedCategory === 'owned'
    ? state.items.filter(item => item.purchased)
    : state.items.filter(item => item.category === state.selectedCategory);

  return {
    categories: state.categories,
    items,
    selectedCategory: state.selectedCategory,
    selectedCategoryPageNumber: selectedCategory ? selectedCategory.pageNumber : 0,
    leftActive: state.leftActive,
    showLoadMore: state.selectedCategory === 'owned' ? false : true,
    showBuyButton: state.selectedCategory !== 'owned',
  };
};

const mapDispatchToProps = dispatch => ({
  openCategory: id => dispatch(toggleCategory(id)),
  closeCategory: () => dispatch(closeCategory()),
  buySomething: (amount, productId) => dispatch(buySomething(amount, productId)),
  showLeft: active => dispatch(showLeft(active)),
  loadMore: (category, pageNumber) => dispatch(loadMore(category, pageNumber)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LeftWrapper);
