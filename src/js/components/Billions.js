import React from 'react';
import PropTypes from 'prop-types';
import Clusterize from 'clusterize.js';
import $ from 'jquery';

import {
  getMarkupArray,
  getDataArray,
  updateDataArray,
  getBillion,
} from '../util';

import Scrolled from './Scrolled';

class Billions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showWarning: true,
    };

    this.dataArray = getDataArray();
    this.markupArray = getMarkupArray(this.dataArray);
  }

  componentDidMount() {
    this.clusterize = new Clusterize({
      rows: this.markupArray,
      scrollId: 'scrollArea',
      contentId: 'contentArea',
      rows_in_block: 32,
    });

    setTimeout(() => {
      this.setState({showWarning: false});
    }, 10000);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.amountLeft !== this.props.amountLeft) {
      this.updateBillions(prevProps.amountLeft, this.props.amountLeft);
    }
  }

  updateBillions(previousAmount, updatedAmount) {
    const amountToDestroy = previousAmount - updatedAmount;
    this.dataArray = updateDataArray(this.dataArray, amountToDestroy, previousAmount);
    this.clusterize.update(getMarkupArray(this.dataArray));

    const rowHeight = 42;
    const rowsToScroll = ((amountToDestroy + (getBillion() - previousAmount)) / 100000) * rowHeight;

    $('#scrollArea').animate({
      scrollTop: rowsToScroll,
    }, 2000);
  }

  render() {
    return (
      <div className="billions-container">
        {
          this.state.showWarning ? (<div className="scroll-warning">
            <h3>Scroll down here</h3>
          </div>) : null
        }
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
};

export default Billions;
