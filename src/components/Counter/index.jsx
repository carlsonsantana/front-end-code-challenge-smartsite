import React from 'react';

import {connect} from 'react-redux';

import './style.css';

function Counter(props) {
  const units = props.units.unitsFound ? props.units.unitsFound : [];
  const unitsLength = units.length;

  return (
    <div className="counter-container">
      Resultados encontrados: <strong>{unitsLength}</strong>
    </div>
  );
}

function mapStateToProps(state) {
  return {units: state.units};
}

export default connect(mapStateToProps)(Counter);
