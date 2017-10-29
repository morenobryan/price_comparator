import { createSelector } from 'reselect';
import { formValueSelector } from 'redux-form';

export const formProductOne = formValueSelector('compareLiquidsProductOne');
export const formProductTwo = formValueSelector('compareLiquidsProductTwo');

export const calculatePricePerUnitProductOne = state => {
  const quantity = formProductOne(state, 'quantity');
  const volume = formProductOne(state, 'volume');
  const price = formProductOne(state, 'price');
  const unit = formProductOne(state, 'unit') || 'L';
  const divider = unit === 'L' ? 1 : 1000;

  return price / (volume / divider * quantity);
};

export const calculatePricePerUnitProductTwo = state => {
  const quantity = formProductTwo(state, 'quantity');
  const volume = formProductTwo(state, 'volume');
  const price = formProductTwo(state, 'price');
  const unit = formProductTwo(state, 'unit') || 'L';
  const divider = unit === 'L' ? 1 : 1000;

  return price / (volume / divider * quantity);
};

export const calculateWorstProduct = createSelector(
  [calculatePricePerUnitProductOne, calculatePricePerUnitProductTwo],
  (priceOne, priceTwo) => Math.max(priceOne, priceTwo)
);

export const calculateEconomyPercentage = createSelector(
  [calculatePricePerUnitProductOne, calculatePricePerUnitProductTwo],
  (priceOne, priceTwo) => {
    const worstPrice = Math.max(priceOne, priceTwo);
    const bestPrice = Math.min(priceOne, priceTwo);

    return (worstPrice - bestPrice) / worstPrice;
  }
);
