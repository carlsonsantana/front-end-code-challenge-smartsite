import React from 'react';

import LegendItemBox from '../LegendItemBox';

import requiredMaskIcon from '../../assets/images/required-mask.png';
import recommendedMaskIcon from '../../assets/images/recommended-mask.png';
import requiredTowelIcon from '../../assets/images/required-towel.png';
import recommendedTowelIcon from '../../assets/images/recommended-towel.png';
import partialFountainIcon from '../../assets/images/partial-fountain.png';
import forbiddenFountainIcon from '../../assets/images/forbidden-fountain.png';
import requiredLockerroomIcon from '../../assets/images/required-lockerroom.png';
import partialLockerroomIcon from '../../assets/images/partial-lockerroom.png';
import forbiddenLockerroomIcon from '../../assets/images/forbidden-lockerroom.png';
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
  const requiredLabel = 'Obrigatório';
  const recommendedLabel = 'Recomendado';
  const partialLabel = 'Parcial';

  const requiredMask = createItem(requiredMaskIcon, requiredLabel);
  const recommendedMask = createItem(recommendedMaskIcon, recommendedLabel);
  const maskItemBox = createItemBox(
    'Máscara',
    [requiredMask, recommendedMask]
  );

  const requiredTowel = createItem(requiredTowelIcon, requiredLabel);
  const recommendedTowel = createItem(recommendedTowelIcon, recommendedLabel);
  const towelItemBox = createItemBox(
    'Toalha',
    [requiredTowel, recommendedTowel]
  );

  const partialFountain = createItem(partialFountainIcon, partialLabel);
  const forbiddenFountain = createItem(forbiddenFountainIcon, 'Proibido');
  const fountainItemBox = createItemBox(
    'Bebedouro',
    [partialFountain, forbiddenFountain]
  );

  const requiredLockerroom = createItem(requiredLockerroomIcon, 'Liberado');
  const partialLockerroom = createItem(partialLockerroomIcon, partialLabel);
  const forbiddenLockerroom = createItem(forbiddenLockerroomIcon, 'Fechado');
  const lockerroomItemBox = createItemBox(
    'Vestiários',
    [requiredLockerroom, partialLockerroom, forbiddenLockerroom]
  );

  return [
    maskItemBox,
    towelItemBox,
    fountainItemBox,
    lockerroomItemBox
  ];
}

function createItem(icon, label) {
  return {icon, label};
}

function createItemBox(label, items) {
  return {label, items};
}
