import React from 'react';
import oneBlock from '../../../assets/oneBlock.png';
import oneRow from '../../../assets/oneRow.png';

const IntroModal = ({ closeModal, modalOpen }) => (
  <div className="modal-wrapper">
    <div className="modal">
      <h2 className="modal__title">
        Spend a{' '}
        <span>
          <span className="green">$</span>billion
        </span>
      </h2>
      <p className="modal__subtitle">
        A stack of ten thousand dollar blocks. Each worth $10,000. 
        A billion dollars stacked. Start scrolling to see the scale. 
      </p>
      <div className="modal__explains">
        <p className="modal__explainer">= <span className="green">$</span>10,000.</p>
        {/* <img className="one-block" src={oneBlock} alt="" />
        <p>Each row is worth $100,000</p>
        <img className="one-row" src={oneRow} alt="" /> */}
      </div>

      {/* <p>Scroll through the stack and use the shop to buy luxury items.</p> */}
      {/* <button className="button primary" onClick={closeModal}>Start</button> */}
      {/* <p className="modal__disclaimer">Content sourced from <a href="">JohnWhatever.com</a> amoung other sites.</p> */}
    </div>
  </div>
);

export default IntroModal;
