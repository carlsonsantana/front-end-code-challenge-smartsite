import React from 'react';

import IconList from '../IconList';
import ScheduleList from '../ScheduleList';

import './style.css';

export default function CardItemExtraInfo({unit}) {
  const {opened, schedules} = unit;

  if (!opened) {
    return null;
  }

  return (
    <div className="card-item-extrainfo">
      <hr />
      <IconList unit={unit} />
      <ScheduleList schedules={schedules} />
    </div>
  );
}
