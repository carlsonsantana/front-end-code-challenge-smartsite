import React from 'react';

import TrainingTimeItem from '../TrainingTimeItem';

import './style.css';

export default function TrainingTime() {
  const MORNING_TIME = {
    'label': 'Manhã',
    'start': '06:00',
    'end': '12:00',
  };
  const AFTERNOON_TIME = {
    'label': 'Tarde',
    'start': '12:01',
    'end': '18:00',
  };
  const EVENING_TIME = {
    'label': 'Noite',
    'start': '18:01',
    'end': '23:00',
  };
  const TRAINING_TIMES = [MORNING_TIME, AFTERNOON_TIME, EVENING_TIME];

  return (
    <fieldset className="training-time">
      <legend>Qual período quer treinar?</legend>

      {TRAINING_TIMES.map(({label, start, end}, index) =>
        <TrainingTimeItem key={index} label={label} start={start} end={end} />
      )}
    </fieldset>
  );
}
