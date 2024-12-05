// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="hero-section">
        <div className="hero-background"></div>
        <div className="hero-text">
          <h1 className="title">Teknolojik Yemekler</h1> {/* Yazı stilini güncelledik */}
          <p>Kod Acıktırır,</p>
          <p> Pizza Doyurur</p>
          <Link to="/order">
            <button className="aciktim-button">ACIKTIM</button>
          </Link>
        </div>
      </header>
      <NavBar />
      <section className="special-offers">
        <h2>Özel Lezzetler</h2>
        <div className="offers">
          <div className="offer">
            <img src="https://via.placeholder.com/150" alt="" />
            <p>Pastırmalı Akdeniz & Et Burger</p>
            <button>İncele</button>
          </div>
          <div className="offer">
            <img src="https://via.placeholder.com/150" alt="Hackathon Burger Menüsü" />
            <p>Hackathon Burger Menüsü</p>
            <button>İncele</button>
          </div>
          <div className="offer">
            <img src="https://via.placeholder.com/150" alt="Hızlı Teslimat" />
            <p>Hızlı Teslimat</p>
            <button>İncele</button>
          </div>
        </div>
      </section>
      <section className="fast-delivery">
        <img src="https://via.placeholder.com/150" alt="Hızlı Teslimat" className="delivery-image" />
        <div className="delivery-text">
          <p>Çooook hızlıyız!</p>
        </div>
      </section>
      <footer className="footer">
        <div className="contact-info">
          <p>İletişim: 123-456-7890</p>
          <p>Email: info@teknolojikyemekler.com</p>
        </div>
        <div className="social-media">
          <a href="#"><img src="https://via.placeholder.com/24" alt="Facebook" /></a>
          <a href="#"><img src="https://via.placeholder.com/24" alt="Twitter" /></a>
          <a href="#"><img src="https://via.placeholder.com/24" alt="Instagram" /></a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
