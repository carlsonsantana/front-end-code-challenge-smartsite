import React from 'react';

import {connect} from 'react-redux';

import HeaderForm from '../HeaderForm';
import TrainingTime from '../TrainingTime';
import ShowClosedUnits from '../ShowClosedUnits';
import Counter from '../Counter';
import loadUnits from '../../service/webservice';
import {findUnits} from '../../store/actions/find_units';

import './style.css';

class Form extends React.Component {
  constructor() {
    super();

    this.findAndFilterUnits = this.findAndFilterUnits.bind(this);
  }

  async findAndFilterUnits() {
    const units = await loadUnits();

    this.props.findUnits(units);
  }

  render() {
    return (
      <div className="form">
        <HeaderForm />
        <TrainingTime />
        <div className="same-line">
          <ShowClosedUnits />
          <Counter />
        </div>
        <div className="buttons">
          <button
            className="submit-button"
            onClick={this.findAndFilterUnits}
          >Encontrar unidade</button>
          <button className="clear-button">Limpar</button>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {findUnits: units => dispatch(findUnits(units))};
}

export default connect(null, mapDispatchToProps)(Form);
