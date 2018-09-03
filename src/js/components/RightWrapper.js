import React from 'react';
import PropTypes from 'prop-types';

import Billions from './Billions';

const RightWrapper = ({ data, showLeft }) => (
  <div className="right-wrapper">
    <Billions data={data} />
    <div className="show-left">
      <button
        className="primary show-left__button"
        tabIndex={0}
        type="button"
        onClick={() => { showLeft(true); }}
      >
        Spend your billion. Click me
      </button>
    </div>
  </div>
);

RightWrapper.propTypes = {
  data: PropTypes.array.isRequired,
  showLeft: PropTypes.func.isRequired,
};

export default RightWrapper;
