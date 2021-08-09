import React from 'react';

import CardItem from '../CardItem';

import './style.css';

export default function CardList() {
  const schedule1 = createSchedule('Seg. à Sex.', '06h às 22h');
  const schedule2 = createSchedule('Sab.', '09h às 18h');
  const schedule3 = createSchedule('Dom.', 'Fechada');
  const schedules = [schedule1, schedule2, schedule3];
  const vicenteLinharesUnit = createUnit(
    1,
    'Vicente Linhares',
    'Rua Tibúrcio Cavalcante, 1885 - Meireles',
    'Fortaleza',
    'CE',
    true,
    'required',
    'required',
    'partial',
    'closed',
    schedules
  );
  const vilaCarraoUnit = createUnit(
    2,
    'Vila Carrão',
    'Av. Guilherme Giorgi, 1460, Vila Carrão',
    'São Paulo',
    'SP',
    false,
    'required',
    'required',
    'partial',
    'closed',
    schedules
  );
  const vilaCarraoUnit2 = createUnit(
    3,
    'Vila Carrão',
    'Av. Guilherme Giorgi, 1460, Vila Carrão',
    'São Paulo',
    'SP',
    false,
    'required',
    'required',
    'partial',
    'closed',
    schedules
  );
  const units = [vicenteLinharesUnit, vilaCarraoUnit, vilaCarraoUnit2];

  return (
    <div className="card-list">
      {units.map((unit, index) => (
        <CardItem key={index} unit={unit} />
      ))}
    </div>
  );
}

function createSchedule(weekdays, hour) {
  return {weekdays, hour};
}

function createUnit(
  id,
  title,
  street,
  city,
  stateName,
  opened,
  mask,
  towel,
  fountain,
  lockerRoom,
  schedules
) {
  return {
    id,
    title,
    street,
    city,
    stateName,
    opened,
    mask,
    towel,
    fountain,
    lockerRoom,
    schedules
  };
}
