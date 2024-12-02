// src/components/Confirmation.js
import React from 'react';
import './Confirmation.css';

const Confirmation = ({ orderDetails }) => {
  return (
    <div className="confirmation">
      <h2>Sipariş Alındı!</h2>
      <p>Ad: {orderDetails.name}</p>
      <p>Adres: {orderDetails.address}</p>
      <p>Pizza Türü: {orderDetails.pizzaType}</p>
    </div>
  );
};

export default Confirmation;
