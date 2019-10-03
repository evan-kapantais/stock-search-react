import React from 'react'
import './Header.css';

export default function Header() {
  return (
    <div className="Header">
      <h1 className="site-title">Folio</h1>
      <div className="user-details">
        <div className="user-info">
          <p><strong>Evangelos Kapantais</strong></p>
          <p>evankapantais@gmail.com</p>
        </div>
        <div className="user-portrait">
          <img src="https://i.pravatar.cc/50?img=65" alt="user portrait"/>
        </div>
      </div>
    </div>
  )
}
