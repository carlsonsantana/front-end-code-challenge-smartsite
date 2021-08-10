import {FIND_UNITS} from '../types';

const INITIAL_STATE = {
  units: null,
};

export default function unitsReducer(
  state = INITIAL_STATE,
  {type, payload}
) {
  switch (type) {
    case FIND_UNITS:
      const units = payload;

      return {
        ...state,
        units
      };
    default:
      return state;
  }
}
