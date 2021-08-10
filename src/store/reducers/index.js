import {combineReducers} from 'redux';

import unitsReducer from './units';

const rootReducer = combineReducers({units: unitsReducer});
export default rootReducer;
