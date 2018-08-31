import React from 'react';
import PropTypes from 'prop-types';

import Item from './Item';

const ItemList = ({ items, closeCategory, buySomething }) => (
  <div className="item__wrapper">
    <p><button type="button" onClick={closeCategory}>Go Back</button></p>
    <ul className="item__list">
      {items.map(item => <Item key={item.id} {...item} onClick={buySomething} />)}
    </ul>
  </div>
);

ItemList.propTypes = {
  items: PropTypes.array.isRequired,
  closeCategory: PropTypes.func.isRequired,
  buySomething: PropTypes.func.isRequired,
};

export default ItemList;
