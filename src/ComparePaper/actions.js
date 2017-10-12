// @flow
import * as at from './actionTypes';
import { form } from './selectors';

// export const calculate = () => (dispatch, getState) => {
//   const rollAmount = form(getState(), 'rollAmount');
//   return { type: at.CALCULATE, payload: rollAmount };
// };
export const setUnit = (unit: string) => ({
  type: at.SET_UNIT,
  unit,
});
