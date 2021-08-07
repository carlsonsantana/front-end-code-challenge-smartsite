import React from 'react';
import Logo from '../Logo';

import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <Logo />
      <h1>Reabertura<br /> Smart Fit</h1>
      <p>O horário de funcionamento das nossas unidades está seguindo os decretos de cada município. Por isso, confira aqui se a sua unidade está aberta e as medidas de segurança que estamos seguindo.</p>
    </header>
  );
}
