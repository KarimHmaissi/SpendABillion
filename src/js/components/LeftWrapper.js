import React from 'react';
import PropTypes from 'prop-types';

import CategoryList from './CategoryList';
import ItemList from './ItemList';

const renderCategoryOrItem = (
  selectedCategory,
  items,
  categories,
  openCategory,
  closeCategory,
  buySomething,
) => {
  if (selectedCategory !== 'false') {
    return (
      <ItemList
        selectedCategory={selectedCategory}
        items={items}
        closeCategory={closeCategory}
        buySomething={buySomething}
      />
    );
  }
  return (
    <CategoryList
      openCategory={openCategory}
      categories={categories}
    />
  );
};

const LeftWrapper = ({
  categories,
  items,
  selectedCategory,
  openCategory,
  closeCategory,
  buySomething,
  showLeft,
  leftActive,
}) => (
  <div className={`left-wrapper ${leftActive ? 'active' : ''}`}>
    <div className="close-left">
      <a
        className="close-left__button"
        tabIndex={0}
        role="button"
        onClick={() => { showLeft(false); }}
      >
        X
      </a>
    </div>
    {renderCategoryOrItem(
      selectedCategory,
      items,
      categories,
      openCategory,
      closeCategory,
      buySomething,
    )}
  </div>
);

LeftWrapper.propTypes = {
  categories: PropTypes.array.isRequired,
  items: PropTypes.array.isRequired,
  selectedCategory: PropTypes.string.isRequired,
  leftActive: PropTypes.bool.isRequired,
  openCategory: PropTypes.func.isRequired,
  closeCategory: PropTypes.func.isRequired,
  buySomething: PropTypes.func.isRequired,
  showLeft: PropTypes.func.isRequired,
};

export default LeftWrapper;
