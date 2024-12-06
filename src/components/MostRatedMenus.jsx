// src/components/MostRatedMenus.js
import React from 'react';
import './MostRatedMenus.css';

const MostRatedMenus = () => {
  return (
    <div className="most-rated-menus">
      <h2>En Çok Puanlanan Menüler</h2>
      <div className="menus">
        <div className="menu">
          <img src="/images/iteration-2-images/cta/kart-2.png" alt="Tavernalılı Pizza" />
          <p>Tavernalılı Pizza</p>
          <span>⭐⭐⭐⭐⭐</span>
        </div>
        <div className="menu">
          <img src="/images/iteration-2-images/pictures/menu2.png" alt="Pastırmalı Akdeniz & Et Pizza" />
          <p>Pastırmalı Akdeniz & Et Pizza</p>
          <span>⭐⭐⭐⭐⭐</span>
        </div>
        <div className="menu">
          <img src="/images/iteration-2-images/pictures/menu3.png" alt="Usulüne Uygun Tavuklu Burger" />
          <p>Usulüne Uygun Tavuklu Burger</p>
          <span>⭐⭐⭐⭐⭐</span>
        </div>
      </div>
    </div>
  );
};

export default MostRatedMenus;
