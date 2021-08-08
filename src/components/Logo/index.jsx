import React from 'react';

import logo from '../../assets/images/logo.svg';
import './style.css';

export default function Logo() {
  return (
    <div className="header-logo">
      <img src={logo} alt="Smart Fit" />
    </div>
  );
}
