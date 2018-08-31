import { connect } from 'react-redux';

import Billions from '../components/Billions';

const mapStateToProps = state => ({
  data: state.data,
});

export default connect(mapStateToProps)(Billions);
