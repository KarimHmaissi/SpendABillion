import React from 'react';
import PropTypes from 'prop-types';

import Item from './Item';

const ItemList = ({ items }) => (
  <ul>
    {items.map(item => <Item {...item} />)}
  </ul>
);

ItemList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default ItemList;
