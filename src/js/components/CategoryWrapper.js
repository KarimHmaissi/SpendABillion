import React from 'react';
import PropTypes from 'prop-types';

import CategoryList from './CategoryList';
// import ItemList from './ItemList';

// const renderCategoryOrItem = (selectedCategory, items, categories) => (
//   selectedCategory ? <ItemList items={items} /> : <CategoryList categories={categories} />
// );

// {renderCategoryOrItem(selectedCategory, items, categories)}
const CategoryWrapper = ({ categories }) => (
  <div className="category__wrapper">
    <CategoryList categories={categories} />
  </div>
);


CategoryWrapper.propTypes = {
  categories: PropTypes.array.isRequired,
  // items: PropTypes.array.isRequired,
  // selectedCategory: PropTypes.string.isRequired,
};

export default CategoryWrapper;
