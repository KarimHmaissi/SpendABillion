import React from 'react';
import PropTypes from 'prop-types';

import Item from './Item';

import { camelToSpaces } from '../util';

const ItemList = ({
  selectedCategory, items, closeCategory, buySomething, selectedCategoryPageNumber, loadMore, showLoadMore, showBuyButton
}) => (
  <div className="item__wrapper">
    <div className="item__back">
      <p className="back__button"><a tabIndex={0} role="button" onClick={closeCategory}>Go Back</a></p>
      <p className="back__category">{camelToSpaces(selectedCategory)}</p>
    </div>
    <ul className="item__list">
      {items.map(item => <Item key={item._id} {...item} showBuyButton={showBuyButton} onClick={buySomething} />)}
    </ul>

    {
      showLoadMore &&
      <div className="item__loadMore">
        <button className="primary" onClick={() => loadMore(selectedCategory, selectedCategoryPageNumber)}>Load more</button>
      </div>
    }
  </div>
);

ItemList.propTypes = {
  items: PropTypes.array.isRequired,
  showLoadMore: PropTypes.bool.isRequired,
  showBuyButton: PropTypes.bool.isRequired,
  selectedCategory: PropTypes.string.isRequired,
  closeCategory: PropTypes.func.isRequired,
  buySomething: PropTypes.func.isRequired,
  loadMore: PropTypes.func.isRequired,
  selectedCategoryPageNumber: PropTypes.number.isRequired,
};

export default ItemList;
