import React from 'react';
import PropTypes from 'prop-types';
import AnimatedNumber from 'react-animated-number';

import { numberWithCommas } from '../util';

const Nav = ({ amountLeft }) => (
  <nav className="nav">
    <h2 className="amount-left__wrapper">
      <span className="amount-left__text">Amount left </span>
      <span className="green">$ </span>
      <span className="amount-left__number">
        <AnimatedNumber
          value={amountLeft}
          duration={3000}
          default={1000000000}
          frameDuration={16}
          stepPrecision={100}

          formatValue={n => numberWithCommas(Math.round(n))}
        />
      </span>
    </h2>
  </nav>
);

Nav.propTypes = {
  amountLeft: PropTypes.number.isRequired,
};

export default Nav;
