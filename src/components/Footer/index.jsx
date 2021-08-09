import React from 'react';

import logo from '../../assets/images/logo.svg';
import './style.css';

export default function Footer() {
  return (
    <footer>
      <img src={logo} alt="Smart Fit" />
      <p>Todos os direitos reservados - 2020</p>
    </footer>
  );
}
