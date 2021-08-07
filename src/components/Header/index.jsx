import React from 'react';

import logo from '../../assets/images/logo.svg';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Smart Fit" />
    </header>
  );
}
