import { combineReducers } from 'redux'
import {CAMPUS_WRITE_ALL, CAMPUS_WRITE_ONE, CAMPUS_DELETE} from '../actions/campusActions.js'

const initialState = {
  allCampus: [],
  oneCampus: {},
}

const campusReducer = (storeState = initialState, action) => {
  const newState = Object.assign({}, storeState);
  switch (action.type) {
    case CAMPUS_WRITE_ALL:
      newState.allCampus = action.data;
      return newState;
    case CAMPUS_WRITE_ONE:
      newState.allCampus = [action.data].concat(newState.allCampus);
      newState.oneCampus = action.data;
      return newState;
    case CAMPUS_DELETE:
      newState.oneCampus = {};
      return newState;
    default: return storeState
  }
};

export default campusReducer
