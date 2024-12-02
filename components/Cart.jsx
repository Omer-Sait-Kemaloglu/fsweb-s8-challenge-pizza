// src/components/Cart.jsx
import React, { useContext } from 'react';
import { CartContext } from '../App';

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="cart">
      <h2>Sepetiniz</h2>
      {cart.length === 0 ? (
        <p>Sepetiniz boş.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price}{' '}
              <button onClick={() => removeFromCart(item.id)}>Sil</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
