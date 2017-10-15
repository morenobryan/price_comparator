import { createSelector } from 'reselect';
import { formValueSelector } from 'redux-form';

const ui = state => state.comparePaper.ui;

export const getUi = createSelector([ui], ui => ui);
export const getUnit = createSelector([getUi], ui => ui.unit || 'm');

export const formProductOne = formValueSelector('comparePaperProductOne');
export const formProductTwo = formValueSelector('comparePaperProductTwo');

export const calculatePricePerUnitProductOne = state => {
  const rollAmount = formProductOne(state, 'rollAmount');
  const rollWidth = formProductOne(state, 'rollWidth');
  const price = formProductOne(state, 'price');

  return price / (rollAmount * rollWidth);
};

export const calculatePricePerUnitProductTwo = state => {
  const rollAmount = formProductTwo(state, 'rollAmount');
  const rollWidth = formProductTwo(state, 'rollWidth');
  const price = formProductTwo(state, 'price');

  return price / (rollAmount * rollWidth);
};

export const calculateBestProduct = createSelector(
  [calculatePricePerUnitProductOne, calculatePricePerUnitProductTwo],
  (priceOne, priceTwo) => Math.min(priceOne, priceTwo)
);

export const calculateEconomyPercentage = createSelector(
  [calculatePricePerUnitProductOne, calculatePricePerUnitProductTwo],
  (priceOne, priceTwo) => {
    const worstPrice = Math.max(priceOne, priceTwo);
    const bestPrice = Math.min(priceOne, priceTwo);

    return (worstPrice - bestPrice) / worstPrice;
  }
);
