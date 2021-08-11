import React from 'react';

import {connect} from 'react-redux';

import CardItem from '../CardItem';

import './style.css';

function CardList({units}) {
  if (units === null) {
    return null;
  } else if (units.length === 0) {
    return (
      <div className="card-list">
        <div className="card-list-empty">
          Nenhuma unidade encontrada
        </div>
      </div>
    );
  }

  return (
    <div className="card-list">
      {units.map((unit, index) => (
        <CardItem key={index} unit={unit} />
      ))}
    </div>
  );
}

function mapStateToProps(state) {
  return {units: state.units.unitsFound};
}

export default connect(mapStateToProps)(CardList);
