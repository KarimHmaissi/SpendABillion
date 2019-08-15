import { connect } from 'react-redux';

import { toggleModal } from '../actions';
import IntroModal from '../components/IntroModal';

const mapStateToProps = state => ({
  modalOpen: state.modalOpen,
});

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(toggleModal()),
  
});

export default connect(mapStateToProps, mapDispatchToProps)(IntroModal);
