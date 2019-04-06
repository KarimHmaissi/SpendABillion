import React from 'react';
import PropTypes from 'prop-types';

import BillionsContainer from '../containers/BillionsContainer';

const RightWrapper = ({ showLeft }) => (
  <div className="right-wrapper">
    <BillionsContainer />
    <div className="show-left">
      <button
        className="primary show-left__button"
        tabIndex={0}
        type="button"
        onClick={() => { showLeft(true); }}
      >
        Open shop
      </button>
    </div>
  </div>
);

RightWrapper.propTypes = {
  showLeft: PropTypes.func.isRequired,
};

export default RightWrapper;
