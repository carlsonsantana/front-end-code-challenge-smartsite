import React from 'react';

import './style.css';

export default function CardItemStatus({opened}) {
  const statusDescription = opened ? 'Aberto' : 'Fechado';
  const statusCSSClass = opened ? 'opened' : 'closed';
  const statusCompleteCSSClass = `card-item-status ${statusCSSClass}`;

  return <span className={statusCompleteCSSClass}>{statusDescription}</span>;
}
