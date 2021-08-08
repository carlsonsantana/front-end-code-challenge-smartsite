import React from 'react';

import HeaderForm from '../HeaderForm';
import TrainingTime from '../TrainingTime';

import './style.css';

export default function Form() {
  return (
    <div className="form">
      <HeaderForm />
      <TrainingTime />
    </div>
  );
}
