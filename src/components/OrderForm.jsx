// src/components/OrderForm.js
import React, { useState } from 'react';
import './OrderForm.css';

const OrderForm = ({ onSubmit }) => {
  const [formState, setFormState] = useState({
    name: '',
    address: '',
    pizzaType: '',
    errors: {}
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, address, pizzaType } = formState;
    let errors = {};
    if (!name) errors.name = 'İsim zorunludur';
    if (!address) errors.address = 'Adres zorunludur';
    if (!pizzaType) errors.pizzaType = 'Pizza türü zorunludur';

    if (Object.keys(errors).length > 0) {
      setFormState({ ...formState, errors });
    } else {
      onSubmit(formState);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="order-form">
      <div className="form-group">
        <label htmlFor="name">İsim:</label>
        <input type="text" id="name" name="name" value={formState.name} onChange={handleChange} />
        {formState.errors.name && <span className="error">{formState.errors.name}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="address">Adres:</label>
        <input type="text" id="address" name="address" value={formState.address} onChange={handleChange} />
        {formState.errors.address && <span className="error">{formState.errors.address}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="pizzaType">Pizza Türü:</label>
        <select id="pizzaType" name="pizzaType" value={formState.pizzaType} onChange={handleChange}>
          <option value="">Pizza Türü Seçin</option>
          <option value="margherita">Margherita</option>
          <option value="pepperoni">Pepperoni</option>
          <option value="veggie">Veggie</option>
        </select>
        {formState.errors.pizzaType && <span className="error">{formState.errors.pizzaType}</span>}
      </div>
      <button type="submit" className="submit-button">Siparişi Ver</button>
    </form>
  );
};

export default OrderForm;
