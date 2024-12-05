// src/components/Confirmation.js
import React from 'react';
import './Confirmation.css';

const Confirmation = () => {
  return (
    <div className="confirmation">
      <h1 className="confirmation-title">Teknolojik Yemekler</h1>
      <h2 className="confirmation-subtitle">LEZZETİN YOLDA</h2>
      <h3 className="confirmation-order-status">SİPARİŞ ALINDI</h3>
      <hr className="confirmation-divider" />
      <div className="order-summary">
        <h2>Sipariş Özeti</h2>
        <p>Pizza Boyutu: Orta</p>
        <p>Hamur Türü: İnce</p>
        <p>Ekstra Malzemeler: Sucuk, Mısır, Soğan</p>
      </div>
      <div className="order-total">
        <h2>Sipariş Toplamı</h2>
        <p>Toplam: 120.50₺</p>
      </div>
    </div>
  );
};

export default Confirmation;
