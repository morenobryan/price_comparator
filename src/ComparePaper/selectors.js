import { createSelector } from 'reselect';
import { formValueSelector } from 'redux-form';

export const formProductOne = formValueSelector('comparePaperProductOne');
export const formProductTwo = formValueSelector('comparePaperProductTwo');

export const calculatePricePerUnitProductOne = state => {
  const rollAmount = formProductOne(state, 'rollAmount');
  const rollWidth = formProductOne(state, 'rollWidth');
  const price = formProductOne(state, 'price');
  const unit = formProductOne(state, 'widthUnit');
  const multiplier = unit === 'm' ? 1 : 100;

  return price / (rollAmount * rollWidth * multiplier);
};

export const calculatePricePerUnitProductTwo = state => {
  const rollAmount = formProductTwo(state, 'rollAmount');
  const rollWidth = formProductTwo(state, 'rollWidth');
  const price = formProductTwo(state, 'price');
  const unit = formProductTwo(state, 'widthUnit');
  const multiplier = unit === 'm' ? 1 : 100;

  return price / (rollAmount * rollWidth * multiplier);
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
