import { connect } from 'react-redux';
import LeftWrapper from '../components/LeftWrapper';
import { toggleCategory, closeCategory, buySomething } from '../actions';

const mapStateToProps = state => ({
  categories: state.categories,
  items: state.items.filter(item => item.category === state.selectedCategory),
  selectedCategory: state.selectedCategory,
});

const mapDispatchToProps = dispatch => ({
  openCategory: id => dispatch(toggleCategory(id)),
  closeCategory: () => dispatch(closeCategory()),
  buySomething: (amount, productId) => dispatch(buySomething(amount, productId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LeftWrapper);