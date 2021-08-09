import React from 'react';

import Icon from '../Icon';

import './style.css';

export default function IconList({unit}) {
  return (
    <div className="icon-list">
      <ul>
        <li><Icon resource="mask" status={unit['mask']} /></li>
        <li><Icon resource="towel" status={unit['towel']} /></li>
        <li><Icon resource="fountain" status={unit['fountain']} /></li>
        <li><Icon resource="locker_room" status={unit['lockerRoom']} /></li>
      </ul>
    </div>
  );
}
