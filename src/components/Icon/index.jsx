import React from 'react';

import iconLoader from '../../helper/icon_loader';

import './style.css';

export default function Icon({resource, status}) {
  const icon = iconLoader(resource, status);

  return <img src={icon} alt="" className="icon" />;
}
