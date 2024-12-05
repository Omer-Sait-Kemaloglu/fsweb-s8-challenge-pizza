// src/components/SpecialOffers.js
import React from 'react';
import './SpecialOffers.css';

const SpecialOffers = () => {
  return (
    <div className="special-offers">
      <h2>Özel Lezzetler</h2>
      <div className="offers">
        <div className="offer">
          <img src="/images/iteration-2-images/cta/kart-2.png" alt="Pastırmalı Akdeniz & Et Burger" />
          <p>Pastırmalı Akdeniz & Et Burger</p>
        </div>
        <div className="offer">
          <img src="/images/iteration-2-images/cta/kart-2.png" alt="Hackathon Burger Menü" />
          <p>Hackathon Burger Menü</p>
        </div>
        <div className="offer">
          <img src="/images/iteration-2-images/cta/kart-2.png" alt="Hızlı Teslimat" />
          <p>Hızlı Teslimat</p>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffers;
