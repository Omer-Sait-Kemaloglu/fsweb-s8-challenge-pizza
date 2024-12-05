// src/components/NavBar.js
import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><img src="/images/iteration-2-images/icons/1.svg" alt="Tüm Kategoriler" /> YENİ! kore</li>
        <li><img src="/images/iteration-2-images/icons/2.svg" alt="Pizza" /> Pizza</li>
        <li><img src="/images/iteration-2-images/icons/3.svg" alt="Burger" /> Burger</li>
        <li><img src="/images/iteration-2-images/icons/4.svg" alt="Kampanyalar" /> Kampanyalar</li>
        <li><img src="/images/iteration-2-images/icons/5.svg" alt="Tatlılar" /> Tatlılar</li>
        <li><img src="/images/iteration-2-images/icons/6.svg" alt="Sıcak İçecek" /> Sıcak İçecek</li>
      </ul>
    </nav>
  );
};

export default NavBar;
