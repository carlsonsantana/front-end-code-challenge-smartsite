import React from 'react';

import {connect} from 'react-redux';

import './style.css';

function Counter({number}) {
  return (
    <div className="counter-container">
      Resultados encontrados: <strong>{number}</strong>
    </div>
  );
}

function mapStateToProps(state) {
  const units = state.units.unitsFound ? state.units.unitsFound : [];
  const unitsLength = units.length;

  return {number: unitsLength};
}

export default connect(mapStateToProps)(Counter);
