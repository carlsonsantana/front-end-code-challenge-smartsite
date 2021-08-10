import {FIND_UNITS} from '../types';

export default function findUnits(units) {
  return {type: FIND_UNITS, payload: units};
}
