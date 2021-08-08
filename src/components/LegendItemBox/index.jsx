import React from 'react';

import LegendItem from '../LegendItem';

import './style.css';

export default function LegendItemBox({itemBox}) {
  const {label, items} = itemBox;
  return (
    <div className="legend-item-box">
      <strong>{label}</strong>
      <div className="legend-items">
        {items.map((item, index) => (
          <LegendItem key={index} icon={item.icon} label={item.label} />
        ))}
      </div>
    </div>
  );
}
