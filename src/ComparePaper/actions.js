// @flow
import * as at from './actionTypes';
import { form } from './selectors';

export const calculate = () => (dispatch, getState) => {
  // console.log("State: ", getState());
  const rollAmount = form(getState(), 'rollAmount');
  console.log('RollAmount', rollAmount);
  return { type: at.CALCULATE, payload: rollAmount };
};

// export const loadAllStart = () => ({ type: at.LOAD_ALL_START });
