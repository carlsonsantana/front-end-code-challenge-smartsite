import React from 'react';

import './style.css';

export default function LegendItem({icon, label}) {
  return (
    <div className="legend-item">
      <img src={icon} alt="" />
      <span>{label}</span>
    </div>
  );
}
