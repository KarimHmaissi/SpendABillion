import React from 'react';
import PropTypes from 'prop-types';

import Category from './Category';

const CategoryList = ({ categories }) => (
  <div>
    <p>Select a category of thing</p>
    <ul className="category__list">
      {categories.map(cat => <Category key={cat.index} {...cat} />)}
    </ul>
  </div>
);

CategoryList.propTypes = {
  categories: PropTypes.array.isRequired,
};

export default CategoryList;
