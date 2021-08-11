import React from 'react';

import './style.css';

export default function TrainingTimeItem(
  {trainingTime, isChecked, changeTrainingTime}
) {
  const {label, start, end, value} = trainingTime;

  return (
    <label className="training-time-item">
      <input
        type="radio"
        name="training-time"
        value={value}
        onChange={changeTrainingTime}
        checked={isChecked} />
      <span className="time-period">{label}</span>
      <span>{start} às {end}</span>
    </label>
  );
}
