import { connect } from 'react-redux';
import LeftWrapper from '../components/LeftWrapper';
import { toggleCategory, closeCategory, buySomething } from '../actions';

const mapStateToProps = state => ({
  categories: state.categories,
  items: state.items,
  selectedCategory: state.selectedCategory,
});

const mapDispatchToProps = dispatch => ({
  openCategory: id => dispatch(toggleCategory(id)),
  closeCategory: () => dispatch(closeCategory()),
  buyItem: (amount, productId) => dispatch(buySomething(amount, productId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LeftWrapper);
