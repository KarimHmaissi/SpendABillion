import { connect } from 'react-redux';

import { viewOwned } from '../actions';
import Nav from '../components/Nav';

const mapStateToProps = state => ({
  amountLeft: state.amountLeft,
  ownedCount: state.items.filter(item => item.purchased).length,
});

const mapDispatchToProps = dispatch => ({
  viewOwned: () => dispatch(viewOwned()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
