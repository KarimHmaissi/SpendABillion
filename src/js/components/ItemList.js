import React from 'react';
import PropTypes from 'prop-types';

import Item from './Item';

import { camelToSpaces } from '../util';

const ItemList = ({
  selectedCategory, items, closeCategory, buySomething,
}) => (
  <div className="item__wrapper">
    <div className="item__back">
      <p className="back__button"><a tabIndex={0} role="button" onClick={closeCategory}>Go Back</a></p>
      <p className="back__category">{camelToSpaces(selectedCategory)}</p>
    </div>
    <ul className="item__list">
      {items.map(item => <Item key={item.id} {...item} onClick={buySomething} />)}
    </ul>
  </div>
);

ItemList.propTypes = {
  items: PropTypes.array.isRequired,
  selectedCategory: PropTypes.string.isRequired,
  closeCategory: PropTypes.func.isRequired,
  buySomething: PropTypes.func.isRequired,
};

export default ItemList;
