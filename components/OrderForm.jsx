// src/components/OrderForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

const OrderForm = ({ cart }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const orderData = {
      name,
      address,
      items: cart,
    };

    try {
      const response = await axios.post('https://reqres.in/api/pizza', orderData);
      setIsSubmitted(true);
      console.log('Sipariş başarıyla gönderildi:', response.data);
    } catch (error) {
      console.error('Sipariş gönderim hatası:', error);
    }
  };

  return (
    <div>
      {isSubmitted ? (
        <h2>Siparişiniz başarıyla gönderildi!</h2>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Adınız</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="address">Adresiniz</label>
            <input
              type="text"
              id="address"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <button type="submit">Siparişi Gönder</button>
        </form>
      )}
    </div>
  );
};

export default OrderForm;
