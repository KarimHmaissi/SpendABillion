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

  render() {
    return (
      <div className="billions-container">
        <Scrolled amountLeft={this.props.amountLeft} />
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
  amountLeft: PropTypes.number.isRequired,
  data: PropTypes.array.isRequired,
};

export default Billions;
