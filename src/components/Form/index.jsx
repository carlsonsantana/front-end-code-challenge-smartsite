import React from 'react';

import HeaderForm from '../HeaderForm';
import TrainingTime from '../TrainingTime';
import ShowClosedUnits from '../ShowClosedUnits';
import Counter from '../Counter';

import './style.css';

export default function Form() {
  return (
    <div className="form">
      <HeaderForm />
      <TrainingTime />
      <div className="same-line">
        <ShowClosedUnits />
        <Counter />
      </div>
    </div>
  );
}
