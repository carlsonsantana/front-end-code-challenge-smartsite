import React from 'react';

import CardItemStatus from '../CardItemStatus';
import CardItemExtraInfo from '../CardItemExtraInfo';

import './style.css';

export default function CardItem({unit}) {
  const {title, street, city, uf, opened} = unit;

  return (
    <div className="card-item">
      <CardItemStatus opened={opened} />
      <strong className="card-item-name">{title}</strong>
      {street ? <span className="card-item-address">{street}</span> : ''}
      {city ? <span className="card-item-city">{city}, {uf}</span> : ''}
      <CardItemExtraInfo unit={unit} />
    </div>
  );
}
