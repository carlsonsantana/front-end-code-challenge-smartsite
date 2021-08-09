import React from 'react';

import CardItemStatus from '../CardItemStatus';
import CardItemExtraInfo from '../CardItemExtraInfo';

import './style.css';

export default function CardItem({unit}) {
  const {title, street, city, stateName, opened} = unit;

  return (
    <div className="card-item">
      <CardItemStatus opened={opened} />
      <strong className="card-item-name">{title}</strong>
      <span className="card-item-address">{street}</span>
      <span className="card-item-city">{city}, {stateName}</span>
      <CardItemExtraInfo unit={unit} />
    </div>
  );
}
