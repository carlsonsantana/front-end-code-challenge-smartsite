import React from 'react';

import './style.css';

export default function TrainingTimeItem({label, start, end}) {
  return (
    <label className="training-time-item">
      <input type="radio" name="training-time" value={`${start}_${end}`} />
      <span className="time-period">{label}</span>
      <span>{start} às {end}</span>
    </label>
  );
}
