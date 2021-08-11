import React from 'react';

import {connect} from 'react-redux';

import CardItem from '../CardItem';

import './style.css';

function CardList({units}) {
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
