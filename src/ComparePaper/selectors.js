import { createSelector } from 'reselect';
import { formValueSelector } from 'redux-form';

const ui = state => state.comparePaper.ui;
export const form = formValueSelector('comparePaper');

export const calculateProductSum = state => {
  const rollAmount = form(state, 'rollAmount');
  const rollWidth = form(state, 'rollWidth');
  const widthUnit = form(state, 'widthUnit');
  const price = form(state, 'price');

  return rollAmount * rollWidth / price;
};

export const getUi = createSelector([ui], ui => ui);
export const getUnit = createSelector([getUi], ui => ui.unit || 'm');
