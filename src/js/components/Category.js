import React from 'react';
import PropTypes from 'prop-types';

const imageReq = require.context('../../../assets/categories', false, /\.(png|jpe?g|svg)$/);
const getImage = i => imageReq(`./${i}.png`);

const Category = ({
  imgSrc, title,
}) => (
  <li className="category__item">
    <img src={getImage(imgSrc)} alt={title} />
    <h4>{title}</h4>
  </li>
);

Category.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Category;
