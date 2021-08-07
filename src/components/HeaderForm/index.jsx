import React from 'react';

import iconHour from '../../assets/images/icon-hour.png';
import './HeaderForm.css';

export default function HeaderForm() {
  return (
    <h2 className="header-form">
      <img src={iconHour} alt="" />
      <span>Horário</span>
    </h2>
  );
}
