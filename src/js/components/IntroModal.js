import React from 'react';

const IntroModal = ({
  closeModal,
  modalOpen
}) => (
  modalOpen ? <div className="modal-wrapper">
    <div className="modal">
      <h2>Spend a billion dollars</h2>
      <p>This website was built to show how ridicolous a billion dollars is. </p>
      <p>Each green square is worth $10,000.</p>
      <p>Each row is worth $100,000</p>
      <p>Scroll through the billion and use the shop to buy luxury items.</p>
      <button className="button primary" onClick={closeModal}>Start</button>
    </div>
  </div> : null
);

export default IntroModal;
