import * as selectors from '../selectors';

const exampleState = {
  form: {
    compareLiquidsProductOne: {
      values: {
        price: '3',
        quantity: '4',
        volume: '5',
        unit: 'L',
      },
    },
    compareLiquidsProductTwo: {
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
    compareLiquidsProductOne: {
      values: {
        price: undefined,
        quantity: undefined,
        volume: undefined,
        unit: undefined,
      },
    },
    compareLiquidsProductTwo: {
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
    const formOne = exampleState.form.compareLiquidsProductOne.values;

    expect(selectors.calculatePricePerUnitProductOne(exampleState)).toEqual(
      formOne.quantity * formOne.volume * 1 / formOne.price
    );
  });
});

describe('calculatePricePerUnitProductTwo', () => {
  it('calculates the correct sum', () => {
    const formTwo = exampleState.form.compareLiquidsProductTwo.values;

    expect(selectors.calculatePricePerUnitProductTwo(exampleState)).toEqual(
      formTwo.quantity * formTwo.volume * 1000 / formTwo.price
    );
  });
});

describe('calculateWorstProduct', () => {
  it('calculates the worst product', () => {
    expect(selectors.calculateWorstProduct(exampleState)).toEqual(
      selectors.calculatePricePerUnitProductTwo(exampleState)
    );
  });
});

describe('calculateEconomyPercentage', () => {
  it('calculates the correct sum', () => {
    const formOne = exampleState.form.compareLiquidsProductOne.values;
    const formTwo = exampleState.form.compareLiquidsProductTwo.values;
    const priceOne = formOne.quantity * formOne.volume * 1 / formOne.price;
    const priceTwo = formTwo.quantity * formTwo.volume * 1000 / formTwo.price;
    const worstPrice = Math.max(priceOne, priceTwo);
    const bestPrice = Math.min(priceOne, priceTwo);

    expect(selectors.calculateEconomyPercentage(exampleState)).toEqual(
      (worstPrice - bestPrice) / worstPrice
    );
  });
});
