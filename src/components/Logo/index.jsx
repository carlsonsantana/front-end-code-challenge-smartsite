import React from 'react';

import logo from '../../assets/images/logo.svg';
import './Logo.css';

export default function Logo() {
  return (
    <div className="header-logo">
      <img src={logo} alt="Smart Fit" />
    </div>
  );
}
