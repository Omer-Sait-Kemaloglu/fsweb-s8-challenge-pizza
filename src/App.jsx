// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import Banner from './components/Banner';
import OrderForm from './components/OrderForm';
import Confirmation from './components/Confirmation';
import './App.css';

function App() {
  const [orderDetails, setOrderDetails] = useState(null);

  const handleOrderSubmit = (orderData) => {
    setOrderDetails(orderData);
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/order" element={<OrderForm onSubmit={handleOrderSubmit} />} />
          <Route path="/confirmation" element={<Confirmation orderDetails={orderDetails} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
