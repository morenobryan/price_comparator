import * as selectors from '../selectors';

const exampleState = {
  form: {
    comparePaperProductOne: {
      values: {
        price: '3',
        quantity: '4',
        rollWidth: '5',
        widthUnit: 'm',
      },
    },
    comparePaperProductTwo: {
      values: {
        price: '5',
        quantity: '6',
        rollWidth: '7',
        widthUnit: 'cm',
      },
    },
  },
};

const emptyExample = {
  form: {
    comparePaperProductOne: {
      values: {
        price: undefined,
        quantity: undefined,
        rollWidth: undefined,
        widthUnit: undefined,
      },
    },
    comparePaperProductTwo: {
      values: {
        price: undefined,
        quantity: undefined,
        rollWidth: undefined,
        widthUnit: undefined,
      },
    },
  },
};

/* Form */
describe('calculatePricePerUnitProductOne', () => {
  it('calculates the correct sum', () => {
    const formOne = exampleState.form.comparePaperProductOne.values;

    expect(selectors.calculatePricePerUnitProductOne(exampleState)).toEqual(
      formOne.price / (formOne.quantity * formOne.rollWidth * 1)
    );
  });
});

describe('calculatePricePerUnitProductTwo', () => {
  it('calculates the correct sum', () => {
    const formTwo = exampleState.form.comparePaperProductTwo.values;

    expect(selectors.calculatePricePerUnitProductTwo(exampleState)).toEqual(
      formTwo.price / (formTwo.quantity * formTwo.rollWidth * 100)
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
    const formOne = exampleState.form.comparePaperProductOne.values;
    const formTwo = exampleState.form.comparePaperProductTwo.values;
    const priceOne = formOne.price / (formOne.quantity * formOne.rollWidth * 1);
    const priceTwo = formTwo.price / (formTwo.quantity * formTwo.rollWidth * 100);
    const worstPrice = Math.max(priceOne, priceTwo);
    const bestPrice = Math.min(priceOne, priceTwo);

    expect(selectors.calculateEconomyPercentage(exampleState)).toEqual(
      (worstPrice - bestPrice) / worstPrice
    );
  });
});
