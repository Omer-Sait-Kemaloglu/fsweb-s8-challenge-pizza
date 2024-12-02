// src/components/ProductList.jsx
import React, { useContext } from 'react';
import { CartContext } from '../App';

const ProductList = () => {
  const { addToCart } = useContext(CartContext);

  const products = [
    { id: 1, name: 'Margherita', price: 12 },
    { id: 2, name: 'Pepperoni', price: 15 },
    { id: 3, name: 'Veggie', price: 14 },
  ];

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product">
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button onClick={() => addToCart(product)}>Sepete Ekle</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
