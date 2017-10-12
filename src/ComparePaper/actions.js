// @flow
import * as at from './actionTypes';
import { form } from './selectors';

export const setUnit = (unit: string) => ({
  type: at.SET_UNIT,
  unit,
});
