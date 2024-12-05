import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './OrderForm.css';

const OrderForm = ({ onSubmit }) => {
  const [formState, setFormState] = useState({
    size: '',
    dough: '',
    extras: [],
    note: '',
    quantity: 1,
    errors: {},
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleExtrasChange = (e) => {
    const { value } = e.target;
    setFormState((prevState) => {
      const extras = prevState.extras.includes(value)
        ? prevState.extras.filter((extra) => extra !== value)
        : [...prevState.extras, value];
      return { ...prevState, extras };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation
    let errors = {};
    if (!formState.size) errors.size = 'Pizza boyutu zorunludur';
    if (!formState.dough) errors.dough = 'Hamur türü zorunludur';

    if (Object.keys(errors).length > 0) {
      setFormState({ ...formState, errors });
    } else {
      onSubmit(formState);
      navigate('/confirmation');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="order-form">
      <h2>Position Absolute Acı Pizza</h2>
      <div className="form-group">
        <label htmlFor="size">Pizza Boyutu</label>
        <select id="size" name="size" value={formState.size} onChange={handleChange}>
          <option value="">Boyut Seçin</option>
          <option value="small">Küçük</option>
          <option value="medium">Orta</option>
          <option value="large">Büyük</option>
        </select>
        {formState.errors.size && <span className="error">{formState.errors.size}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="dough">Hamur Seç</label>
        <select id="dough" name="dough" value={formState.dough} onChange={handleChange}>
          <option value="">Hamur Seçin</option>
          <option value="thin">İnce</option>
          <option value="thick">Kalın</option>
        </select>
        {formState.errors.dough && <span className="error">{formState.errors.dough}</span>}
      </div>

      <div className="form-group">
        <label>Ekstra Malzemeler</label>
        <div className="extras">
          {['Pepperoni', 'Sosis', 'Kanada Jambonu', 'Tavuk Izgara', 'Soğan', 'Domates', 'Mısır', 'Jalepeno', 'Sarımsak', 'Biber', 'Sucuk', 'Ananas', 'Kabak'].map((extra) => (
            <div key={extra}>
              <input
                type="checkbox"
                id={extra}
                name="extras"
                value={extra}
                checked={formState.extras.includes(extra)}
                onChange={handleExtrasChange}
              />
              <label htmlFor={extra}>{extra}</label>
            </div>
          ))}
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="note">Sipariş Notu</label>
        <textarea id="note" name="note" value={formState.note} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label htmlFor="quantity">Adet</label>
        <input type="number" id="quantity" name="quantity" value={formState.quantity} min="1" onChange={handleChange} />
      </div>

      <div className="order-summary">
        <p>Seçim Ücreti: <span>{formState.extras.length * 5.00}₺</span></p>
        <p>Toplam Ücret: <span>{85.50 + formState.extras.length * 5.00}₺</span></p>
      </div>

      <button type="submit" className="submit-button">SİPARİŞ VER</button>
    </form>
  );
};

export default OrderForm;