// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from './Home.png';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Teknolojik Yemekler Logo" className="logo" />
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
