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

  changeTrainingTime(event) {
    this.props.setTrainingTime(event.target.value);
  }

  render() {
    const MORNING_TIME = {
      'label': 'Manhã',
      'start': '06:00',
      'end': '12:00',
    };
    const AFTERNOON_TIME = {
      'label': 'Tarde',
      'start': '12:01',
      'end': '18:00',
    };
    const EVENING_TIME = {
      'label': 'Noite',
      'start': '18:01',
      'end': '23:00',
    };
    const TRAINING_TIMES = [MORNING_TIME, AFTERNOON_TIME, EVENING_TIME];

    return (
      <fieldset className="training-time" onChange={this.changeTrainingTime}>
        <legend>Qual período quer treinar?</legend>

        {TRAINING_TIMES.map(({label, start, end}, index) =>
          <TrainingTimeItem
            key={index}
            label={label}
            start={start}
            end={end} />
        )}
      </fieldset>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setTrainingTime: trainingTime => dispatch(setTrainingTime(trainingTime))
  };
}

export default connect(null, mapDispatchToProps)(TrainingTime);
