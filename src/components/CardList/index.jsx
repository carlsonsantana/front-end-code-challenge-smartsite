import React from 'react';

import {connect} from 'react-redux';

import CardItem from '../CardItem';

import './style.css';

function CardList(props) {
  const units = props.units.unitsFound ? props.units.unitsFound : [];

  return (
    <div className="card-list">
      {units.map((unit, index) => (
        <CardItem key={index} unit={unit} />
      ))}
    </div>
  );
}

function mapStateToProps(state) {
  return {units: state.units};
}

export default connect(mapStateToProps, null)(CardList);
