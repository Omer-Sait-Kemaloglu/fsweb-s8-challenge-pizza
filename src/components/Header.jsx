// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1></h1>
      <nav>
        <ul>
          <li><Link to="/">Anasayfa</Link></li>
          <li><Link to="/order">Sipariş Ver</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
