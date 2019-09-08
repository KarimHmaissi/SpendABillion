import React from 'react';
import PropTypes from 'prop-types';
import AnimatedNumber from 'react-animated-number';

import { numberWithCommas } from '../util';

const Nav = ({ amountLeft, ownedCount, viewOwned }) => (
  <nav className="nav">
    <h3 className="brand"><a href="/">Evil<span>Turtle</span></a></h3>
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
    <h3 className="owned" onClick={viewOwned}>{`Owned ${ownedCount}`}</h3>
  </nav>
);

Nav.propTypes = {
  amountLeft: PropTypes.number.isRequired,
  ownedCount: PropTypes.number.isRequired,
  viewOwned: PropTypes.func.isRequired,
};

export default Nav;
