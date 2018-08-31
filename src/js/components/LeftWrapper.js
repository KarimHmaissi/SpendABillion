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
      <ItemList items={items} closeCategory={closeCategory} buySomething={buySomething} />
    );
  }
  return <CategoryList openCategory={openCategory} categories={categories} />;
};

const LeftWrapper = ({
  categories, items, selectedCategory, openCategory, closeCategory,
}) => (
  <div className="left-wrapper">
    {renderCategoryOrItem(selectedCategory, items, categories, openCategory, closeCategory)}
  </div>
);

LeftWrapper.propTypes = {
  categories: PropTypes.array.isRequired,
  items: PropTypes.array.isRequired,
  selectedCategory: PropTypes.string.isRequired,
  openCategory: PropTypes.func.isRequired,
  closeCategory: PropTypes.func.isRequired,
};

export default LeftWrapper;
