import { connect } from 'react-redux';
import { showLeft } from '../actions';

import RightWrapper from '../components/RightWrapper';

const mapStateToProps = state => ({
  data: state.data,
  amountLeft: state.amountLeft,
});

const mapDispatchToProps = dispatch => ({
  showLeft: active => dispatch(showLeft(active)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RightWrapper);
