import React from 'react';

import './style.css';

export default function ShowClosedUnits() {
  return (
    <div className="show-closed-units-container">
      <input
        type="checkbox"
        value="true"
        name="show-closed-units"
        id="show-closed-units" />
      <label htmlFor="show-closed-units">Exibir unidades fechadas</label>
    </div>
  );
}
