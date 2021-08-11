import React from 'react';

import {connect} from 'react-redux';

import TrainingTimeItem from '../TrainingTimeItem';
import {setTrainingTime} from '../../store/actions/find_units';

import './style.css';

class TrainingTime extends React.Component {
  constructor() {
    super();

    this.changeTrainingTime = this.changeTrainingTime.bind(this);
  }

  changeTrainingTime({target}) {
    if (target.checked) {
      this.props.setTrainingTime(target.value);
    }
  }

  render() {
    const MORNING_TIME = {
      'label': 'Manhã',
      'start': '06:00',
      'end': '12:00',
      'value': '06:00_12:00',
    };
    const AFTERNOON_TIME = {
      'label': 'Tarde',
      'start': '12:01',
      'end': '18:00',
      'value': '12:01_18:00',
    };
    const EVENING_TIME = {
      'label': 'Noite',
      'start': '18:01',
      'end': '23:00',
      'value': '18:01_23:00',
    };
    const TRAINING_TIMES = [MORNING_TIME, AFTERNOON_TIME, EVENING_TIME];

    return (
      <fieldset className="training-time">
        <legend>Qual período quer treinar?</legend>

        {TRAINING_TIMES.map((trainingTime, index) =>
          <TrainingTimeItem
            key={index}
            trainingTime={trainingTime}
            isChecked={trainingTime.value === this.props.trainingTime}
            changeTrainingTime={this.changeTrainingTime} />
        )}
      </fieldset>
    );
  }
}

function mapStateToProps(state) {
  return {trainingTime: state.units.filters.trainingTime};
}

function mapDispatchToProps(dispatch) {
  return {
    setTrainingTime: trainingTime => dispatch(setTrainingTime(trainingTime))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TrainingTime);
