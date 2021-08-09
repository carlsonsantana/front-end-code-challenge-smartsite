import React from 'react';

import LegendItemBox from '../LegendItemBox';
import iconLoader from '../../helper/icon_loader';

import './style.css';

export default function Legend() {
  const itemBoxes = createItemBoxes();

  return (
    <div className="legend">
      {itemBoxes.map((itemBox, index) => (
        <LegendItemBox key={index} itemBox={itemBox} />
      ))}
    </div>
  );
}

function createItemBoxes() {
  const requiredStatus = createStatus('required', 'Obrigatório');
  const recommendedStatus = createStatus('recommended', 'Recomendado');
  const partialStatus = createStatus('partial', 'Parcial');
  const forbiddenStatus = createStatus('not_allowed', 'Proibido');
  const allowedStatus = createStatus('allowed', 'Liberado');
  const closedStatus = createStatus('closed', 'Fechado');

  const maskItemBox = createItemBox(
    'Máscara',
    'mask',
    [requiredStatus, recommendedStatus]
  );
  const towelItemBox = createItemBox(
    'Toalha',
    'towel',
    [requiredStatus, recommendedStatus]
  );
  const fountainItemBox = createItemBox(
    'Bebedouro',
    'fountain',
    [partialStatus, forbiddenStatus]
  );
  const lockerroomItemBox = createItemBox(
    'Vestiários',
    'locker_room',
    [allowedStatus, partialStatus, closedStatus]
  );

  return [
    maskItemBox,
    towelItemBox,
    fountainItemBox,
    lockerroomItemBox
  ];
}

function createStatus(status, label) {
  return {status, label};
}

function createItemBox(label, resource, allStatus) {
  const items = allStatus.map(({status, label}) => {
    const icon = iconLoader(resource, status);
    return {icon, label};
  });

  return {label, items};
}
