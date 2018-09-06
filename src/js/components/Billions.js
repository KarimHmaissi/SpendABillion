import React from 'react';
import PropTypes from 'prop-types';
import Clusterize from 'clusterize.js';

import Scrolled from './Scrolled';

class Billions extends React.Component {
  componentDidMount() {
    this.clusterize = new Clusterize({
      rows: this.props.data,
      scrollId: 'scrollArea',
      contentId: 'contentArea',
      rows_in_block: 32,
    });
  }

  // <h2>{`Percentage scrolled: ${percentage.toPrecision(2)}%.`}</h2>
  render() {
    return (
      <div className="billions-container">
        <Scrolled />
        <div id="scrollArea" className="clusterize-scroll">
          <ul id="contentArea" className="clusterize-content billions">
            <li className="clusterize-no-data">Loading data…</li>
          </ul>
        </div>
      </div>
    );
  }
}

Billions.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Billions;
