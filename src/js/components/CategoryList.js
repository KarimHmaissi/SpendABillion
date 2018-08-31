import React from 'react';
import PropTypes from 'prop-types';

import Category from './Category';

const CategoryList = ({ categories, openCategory }) => (
  <div className="category__wrapper">
    <p>Select a category of thing</p>
    <ul className="category__list">
      {categories.map(
        cat => <Category {...cat} key={cat.id} onClick={() => openCategory(cat.id)} />,
      )}
    </ul>
  </div>
);

CategoryList.propTypes = {
  categories: PropTypes.array.isRequired,
  openCategory: PropTypes.func.isRequired,
};

export default CategoryList;
