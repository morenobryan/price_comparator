import * as selectors from '../selectors';

const exampleState = {
  form: {
    compareSolidsProductOne: {
      values: {
        price: '3',
        quantity: '4',
        mass: '5',
        unit: 'g',
      },
    },
    compareSolidsProductTwo: {
      values: {
        price: '5',
        quantity: '6',
        mass: '7',
        unit: 'kg',
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
        mass: undefined,
        unit: undefined,
      },
    },
    compareSolidsProductTwo: {
      values: {
        price: undefined,
        quantity: undefined,
        mass: undefined,
        unit: undefined,
      },
    },
  },
};

/* Form */
describe('calculatePricePerUnitProductOne', () => {
  it('calculates the correct sum', () => {
    const formOne = exampleState.form.compareSolidsProductOne.values;

    expect(selectors.calculatePricePerUnitProductOne(exampleState)).toEqual(
      formOne.quantity * formOne.mass * 1000 / formOne.price
    );
  });
});

describe('calculatePricePerUnitProductTwo', () => {
  it('calculates the correct sum', () => {
    const formTwo = exampleState.form.compareSolidsProductTwo.values;

    expect(selectors.calculatePricePerUnitProductTwo(exampleState)).toEqual(
      formTwo.quantity * formTwo.mass * 1 / formTwo.price
    );
  });
});

describe('calculateWorstProduct', () => {
  it('calculates the worst product', () => {
    expect(selectors.calculateWorstProduct(exampleState)).toEqual(
      selectors.calculatePricePerUnitProductOne(exampleState)
    );
  });
});

describe('calculateEconomyPercentage', () => {
  it('calculates the correct sum', () => {
    const formOne = exampleState.form.compareSolidsProductOne.values;
    const formTwo = exampleState.form.compareSolidsProductTwo.values;
    const priceOne = formOne.quantity * formOne.mass * 1000 / formOne.price;
    const priceTwo = formTwo.quantity * formTwo.mass * 1 / formTwo.price;
    const worstPrice = Math.max(priceOne, priceTwo);
    const bestPrice = Math.min(priceOne, priceTwo);

    expect(selectors.calculateEconomyPercentage(exampleState)).toEqual(
      (worstPrice - bestPrice) / worstPrice
    );
  });
});
