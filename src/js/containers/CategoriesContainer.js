import { connect } from 'react-redux';
import CategoryWrapper from '../components/CategoryWrapper';

const mapStateToProps = state => ({ categories: state.categories });

export default connect(mapStateToProps)(CategoryWrapper);
