import React from 'react';

import ScheduleItem from '../ScheduleItem';

export default function ScheduleList({schedules}) {
  return (
    <div className="schedule-list">
      {schedules.map((schedule, index) => (
        <ScheduleItem key={index} schedule={schedule} />
      ))}
    </div>
  );
}
