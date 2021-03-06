import React from 'react';
import PropTypes from 'prop-types';

import Description from './Description';

const imageReq = require.context('../../../assets', false, /\.(png|jpe?g|svg)$/);
const getImage = i => imageReq(`./${i}.jpg`);

const Item = ({
  _id,
  title,
  description,
  imageUrl,
  priceFormatted,
  price,
  onClick,
  purchased,
  showBuyButton,
}) => (
  <li className={`item ${purchased && showBuyButton ? 'item--purchased' : ''}`}>
    <div className="item__image">
      <img src={getImage(imageUrl)} alt={title} />
    </div>
    <div className="item__content">
      <h3 className="item__title">{title}</h3>
      <Description description={description} />
      <p className="item__price">
        <span>$ </span>
        {priceFormatted}
      </p>
      {showBuyButton
        && <button type="button" className="primary" onClick={() => onClick(+price, _id)}>Buy</button>}
    </div>
  </li>
);

Item.propTypes = {
  _id: PropTypes.number.isRequired,
  purchased: PropTypes.bool.isRequired,
  showBuyButton: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  priceFormatted: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Item;
