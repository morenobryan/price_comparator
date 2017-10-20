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
      formOne.price / (formOne.quantity * formOne.volume * 1)
    );
  });
});

describe('calculatePricePerUnitProductTwo', () => {
  it('calculates the correct sum', () => {
    const formTwo = exampleState.form.compareLiquidsProductTwo.values;

    expect(selectors.calculatePricePerUnitProductTwo(exampleState)).toEqual(
      formTwo.price / (formTwo.quantity * formTwo.volume * 1000)
    );
  });
});

describe('calculateBestProduct', () => {
  it('calculates the best product', () => {
    expect(selectors.calculateBestProduct(exampleState)).toEqual(
      selectors.calculatePricePerUnitProductTwo(exampleState)
    );
  });
});

describe('calculateEconomyPercentage', () => {
  it('calculates the correct sum', () => {
    const formOne = exampleState.form.compareLiquidsProductOne.values;
    const formTwo = exampleState.form.compareLiquidsProductTwo.values;
    const priceOne = formOne.price / (formOne.quantity * formOne.volume * 1);
    const priceTwo = formTwo.price / (formTwo.quantity * formTwo.volume * 1000);
    const worstPrice = Math.max(priceOne, priceTwo);
    const bestPrice = Math.min(priceOne, priceTwo);

    expect(selectors.calculateEconomyPercentage(exampleState)).toEqual(
      (worstPrice - bestPrice) / worstPrice
    );
  });
});
