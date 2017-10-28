import { createSelector } from 'reselect';
import { formValueSelector } from 'redux-form';

export const formProductOne = formValueSelector('compareLiquidsProductOne');
export const formProductTwo = formValueSelector('compareLiquidsProductTwo');

export const calculatePricePerUnitProductOne = state => {
  const quantity = formProductOne(state, 'quantity');
  const volume = formProductOne(state, 'volume');
  const price = formProductOne(state, 'price');
  const unit = formProductOne(state, 'unit') || 'L';
  const multiplier = unit === 'L' ? 1 : 1000;

  // console.log('quantity', quantity);
  // console.log('volume', volume);
  // console.log('price', price);
  // console.log('unit', unit);

  return price / (quantity * volume * multiplier);
};

export const calculatePricePerUnitProductTwo = state => {
  const quantity = formProductTwo(state, 'quantity');
  const volume = formProductTwo(state, 'volume');
  const price = formProductTwo(state, 'price');
  const unit = formProductTwo(state, 'unit') || 'L';
  const multiplier = unit === 'L' ? 1 : 1000;

  return price / (quantity * volume * multiplier);
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
