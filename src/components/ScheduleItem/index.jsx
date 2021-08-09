import React from 'react';

import './style.css';

export default function ScheduleItem({schedule}) {
  return (
    <div className="schedule">
      <strong>{schedule.weekdays}</strong><br />
      <span>{schedule.hour}</span>
    </div>
  );
}
