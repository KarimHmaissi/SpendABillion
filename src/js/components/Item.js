import React from 'react';
import PropTypes from 'prop-types';

const imageReq = require.context('../../../assets', false, /\.(png|jpe?g|svg)$/);
const getImage = i => imageReq(`./${i}.jpg`);

const Item = ({
  id,
  title,
  description,
  imageUrl,
  priceFormatted,
  price,
  onClick,
}) => (
  <li className="item">
    <div className="item__image">
      <img src={getImage(imageUrl)} alt={title} />
    </div>
    <div className="item__content">
      <h3 className="item__title">{title}</h3>
      <p className="item__description">
        {description.substring(0, 140)}
        ...
      </p>
      <p className="item__price">
        <span>$ </span>
        {priceFormatted}
      </p>
      <button type="button" className="primary" onClick={() => onClick(+price, id)}>Buy</button>
    </div>
  </li>
);

Item.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  priceFormatted: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Item;
