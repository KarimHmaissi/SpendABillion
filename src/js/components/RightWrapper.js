import React from 'react';
import PropTypes from 'prop-types';

import Billions from './Billions';

const RightWrapper = ({ data, amountLeft, showLeft }) => (
  <div className="right-wrapper">
    <Billions data={data} amountLeft={amountLeft} />
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
  data: PropTypes.array.isRequired,
  amountLeft: PropTypes.number.isRequired,
  showLeft: PropTypes.func.isRequired,
};

export default RightWrapper;
