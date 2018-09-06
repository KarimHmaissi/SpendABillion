import React from 'react';

import ScrollManager from '../services/ScrollManager';

class Scrolled extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      percent: 0,
    };
  }

  componentDidMount() {
    this.scrollManager = new ScrollManager(document.getElementById('scrollArea'));

    window.addEventListener('window-scroll', (e) => {
      this.setState({
        percent: e.detail.percent,
      });
    });
  }

  render() {
    return (
      <div className="scrolled">
        <p className="scrolled__label">
          <span>Scrolled </span>
        </p>
        <p className="scrolled__percent">
          {this.state.percent.toPrecision(4)}
          %
        </p>

        <div className="scrolled__box">
          <div className="scrolled__left" style={{ height: `${this.state.percent.toPrecision(4)}%` }} />
          <div className="scrolled__progress" style={{ top: `${this.state.percent.toPrecision(4)}%` }} />
        </div>

      </div>
    );
  }
}

export default Scrolled;
