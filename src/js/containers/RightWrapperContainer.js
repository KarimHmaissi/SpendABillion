import { connect } from 'react-redux';
import { showLeft } from '../actions';

import RightWrapper from '../components/RightWrapper';

const mapStateToProps = state => ({
  amountLeft: state.amountLeft,
  leftActive: state.leftActive,
});

const mapDispatchToProps = dispatch => ({
  showLeft: active => dispatch(showLeft(active)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RightWrapper);
