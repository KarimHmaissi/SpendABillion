import React from 'react';
import PropTypes from 'prop-types';

const Item = ({
  title,
  description,
  imageUrl,
  price,
}) => (
  <li className="item">
    <div className="item__image">
      <img src={imageUrl} alt={title} />
    </div>
    <div className="item__content">
      <h3 className="item__title">{title}</h3>
      <p className="item__description">{description}</p>
      <p className="item__price">{price}</p>
      <button type="button" className="primary">Buy</button>
    </div>
  </li>
);

Item.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default Item;
