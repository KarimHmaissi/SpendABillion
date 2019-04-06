import { connect } from 'react-redux';

import Billions from '../components/Billions';

const mapStateToProps = state => ({
  amountLeft: state.amountLeft,
});

export default connect(mapStateToProps)(Billions);
