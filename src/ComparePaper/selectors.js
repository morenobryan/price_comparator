import { createSelector } from 'reselect';
import { formValueSelector } from 'redux-form';

const ui = state => state.comparePaper.ui;
export const formProductOne = formValueSelector('comparePaperProductOne');
export const formProductTwo = formValueSelector('comparePaperProductTwo');

export const calculateProductSum = state => {
  const rollAmount = formProductOne(state, 'rollAmount');
  const rollWidth = formProductOne(state, 'rollWidth');
  const price = formProductOne(state, 'price');

  return rollAmount * rollWidth / price;
};

export const getUi = createSelector([ui], ui => ui);
export const getUnit = createSelector([getUi], ui => ui.unit || 'm');
