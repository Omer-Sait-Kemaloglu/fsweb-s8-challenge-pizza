// src/App.jsx
import React, { useState, createContext } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import OrderForm from './components/OrderForm';
import './App.css'; // App için özel stiller

// Sepet için context oluşturuyoruz.
export const CartContext = createContext();

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      <Header />
      <ProductList />
      <Cart />
      <OrderForm cart={cart} />
    </CartContext.Provider>
  );
};

export default App;
