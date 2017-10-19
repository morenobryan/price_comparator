import * as selectors from '../selectors';

const exampleState = {
  form: {
    compareSolidsProductOne: {
      values: {
        price: '3',
        quantity: '4',
        volume: '5',
        unit: 'L',
      },
    },
    compareSolidsProductTwo: {
      values: {
        price: '5',
        quantity: '6',
        volume: '7',
        unit: 'mL',
      },
    },
  },
};

const emptyExample = {
  form: {
    compareSolidsProductOne: {
      values: {
        price: undefined,
        quantity: undefined,
        volume: undefined,
        unit: undefined,
      },
    },
    compareSolidsProductTwo: {
      values: {
        price: undefined,
        quantity: undefined,
        volume: undefined,
        unit: undefined,
      },
    },
  },
};

/* Form */
describe('calculatePricePerUnitProductOne', () => {
  it('calculates the correct sum', () => {
    expect(selectors.calculatePricePerUnitProductOne(exampleState)).toEqual(
      exampleState.form.compareSolidsProductOne.values.price /
        exampleState.form.compareSolidsProductOne.values.quantity *
        exampleState.form.compareSolidsProductOne.values.volume
    );
  });
});

describe('calculatePricePerUnitProductTwo', () => {
  it('calculates the correct sum', () => {
    expect(selectors.calculatePricePerUnitProductTwo(exampleState)).toEqual(
      exampleState.form.compareSolidsProductTwo.values.price /
        exampleState.form.compareSolidsProductTwo.values.quantity *
        exampleState.form.compareSolidsProductTwo.values.volume
    );
  });
});

describe('calculateEconomyPercentage', () => {
  it('calculates the correct sum', () => {
    const priceOne =
      exampleState.form.compareSolidsProductOne.values.price /
      exampleState.form.compareSolidsProductOne.values.quantity *
      exampleState.form.compareSolidsProductOne.values.volume;

    const priceTwo =
      exampleState.form.compareSolidsProductTwo.values.price /
      exampleState.form.compareSolidsProductTwo.values.quantity *
      exampleState.form.compareSolidsProductTwo.values.volume;

    const worstPrice = Math.max(priceOne, priceTwo);
    const bestPrice = Math.min(priceOne, priceTwo);

    expect(selectors.calculateEconomyPercentage(exampleState)).toEqual(
      (worstPrice - bestPrice) / worstPrice
    );
  });
});
