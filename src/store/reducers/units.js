import {FIND_UNITS, SET_TRAINING_TIME} from '../types';

const INITIAL_STATE = {
  units: null,
  unitsFound: null,
  filters: {
    trainingTime: null
  },
};

export default function unitsReducer(
  state = INITIAL_STATE,
  {type, payload}
) {
  switch (type) {
    case FIND_UNITS:
      const units = payload;
      const unitsFound = units.filter(filterByTrainingTime(state));

      return {
        ...state,
        units,
        unitsFound
      };
    case SET_TRAINING_TIME:
      const trainingTime = payload;
      const filters = {
        ...state.filters,
        trainingTime
      };

      return {
        ...state,
        filters
      };
    default:
      return state;
  }
}

function filterByTrainingTime({filters}) {
  return (unit) => {
    const {trainingTime} = filters;

    if ((trainingTime) && (unit.schedules)) {
      const times = trainingTime.split('_');
      const startTrainingTime = parseFloat(times[0].replace(':', '.'));
      const endTrainingTime = parseFloat(times[1].replace(':', '.'));

      return unit.schedules.reduce(
        hasScheduleSameSime(startTrainingTime, endTrainingTime),
        false
      );
    }
    return true;
  }
}

function hasScheduleSameSime(startTrainingTime, endTrainingTime) {
  return (accumulator, {hour}) => {
    const isHours = hour.match(/^[0-9]+h[0-9]* às [0-9]+h[0-9]*$/);

    if (isHours) {
      const scheduleTimes = hour.replace(
        /h([0-9]+)/g, '.$1'
      ).replace('h', '').split(' às ');
      const startScheduleTime = parseFloat(scheduleTimes[0]);
      const endScheduleTime = parseFloat(scheduleTimes[1]);

      return (
        accumulator
        || !(
          (endTrainingTime <= startScheduleTime)
          || (endScheduleTime <= startTrainingTime)
        )
      );
    }
    return accumulator || false;
  }
}
