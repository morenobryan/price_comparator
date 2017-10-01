import { createSelector } from 'reselect';
import { formValueSelector } from 'redux-form';

export const form = formValueSelector('comparePaper');

export const calculateProductSum = state => {
  const rollAmount = form(state, 'rollAmount');
  const rollWidth = form(state, 'rollWidth');
  const widthUnit = form(state, 'widthUnit');
  const price = form(state, 'price');

  return rollAmount * rollWidth / price;
};
