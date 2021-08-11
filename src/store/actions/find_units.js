import {FIND_UNITS, SET_TRAINING_TIME} from '../types';

export function findUnits(units) {
  return {type: FIND_UNITS, payload: units};
}

export function setTrainingTime(trainingTime) {
  return {type: SET_TRAINING_TIME, payload: trainingTime};
}
