import { connect } from 'react-redux';

import Nav from '../components/Nav';

const mapStateToProps = state => ({
  amountLeft: state.amountLeft,
});

export default connect(mapStateToProps)(Nav);
