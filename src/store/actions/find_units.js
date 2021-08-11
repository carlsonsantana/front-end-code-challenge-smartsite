import {
  FIND_UNITS,
  SET_TRAINING_TIME,
  SET_INCLUDE_UNITS_CLOSED,
  RESET_FIELDS
} from '../types';

export function findUnits(units) {
  return {type: FIND_UNITS, payload: units};
}

export function setTrainingTime(trainingTime) {
  return {type: SET_TRAINING_TIME, payload: trainingTime};
}

export function setIncludeUnitsClosed(includeUnitsClosed) {
  return {type: SET_INCLUDE_UNITS_CLOSED, payload: includeUnitsClosed};
}

export function resetFields() {
  return {type: RESET_FIELDS};
}
