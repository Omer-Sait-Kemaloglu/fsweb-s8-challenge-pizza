// src/components/Banner.js
import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner">
      <img src="/home-banner.png" alt="Home Banner" className="banner-image" />
      <div className="banner-text">
        <h1>Teknolojik Yemekler</h1>
        <p>KOD ACIKTIRIR</p>
        <p>PİZZA, DOYURUR</p>
        <button className="order-button">ACIKTIM</button>
      </div>
    </div>
  );
};

export default Banner;
