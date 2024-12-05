// src/components/Banner.js
import React from 'react';
import { Link } from 'react-router-dom';
import homeBanner from '../../images/iteration-1-images/home-banner.png';
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner">
      <img src={homeBanner} alt="Home Banner" className="banner-image" />
      <div className="banner-text">
        <h1>Teknolojik Yemekler</h1>
       
        <p>KOD ACIKTIRIR</p>
        <p>PİZZA, DOYURUR</p>
        <Link to="/order">
          <button className="order-button">ACIKTIM</button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
