import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Banner from './components/Banner';
import OrderForm from './components/OrderForm';
import Confirmation from './components/Confirmation';
import HomePage from './components/HomePage'; // Yeni bileşen eklendi

const App = () => {
  const [orderDetails, setOrderDetails] = useState(null);

  const handleOrderSubmit = (orderData) => {
    setOrderDetails(orderData);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Giriş sayfası olarak güncellendi */}
        <Route path="/banner" element={<Banner />} /> {/* Eski Banner bileşeni */}
        <Route path="/order" element={<OrderForm onSubmit={handleOrderSubmit} />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </Router>
  );
};

export default App;