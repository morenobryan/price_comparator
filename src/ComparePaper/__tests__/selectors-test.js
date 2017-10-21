import * as selectors from '../selectors';

const exampleState = {
  form: {
    comparePaperProductOne: {
      values: {
        price: '3',
        quantity: '4',
        volume: '5',
        widthUnit: 'm',
      },
    },
    comparePaperProductTwo: {
      values: {
        price: '5',
        quantity: '6',
        volume: '7',
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
      formOne.quantity * formOne.rollWidth * 1 / formOne.price
    );
  });
});

describe('calculatePricePerUnitProductTwo', () => {
  it('calculates the correct sum', () => {
    const formTwo = exampleState.form.comparePaperProductTwo.values;

    expect(selectors.calculatePricePerUnitProductTwo(exampleState)).toEqual(
      formTwo.quantity * formTwo.rollWidth * 100 / formTwo.price
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
  it('calculates the economy percentage', () => {
    const formOne = exampleState.form.comparePaperProductOne.values;
    const formTwo = exampleState.form.comparePaperProductTwo.values;
    const priceOne = formOne.quantity * formOne.rollWidth * 1 / formOne.price;
    const priceTwo = formTwo.quantity * formTwo.rollWidth * 100 / formOne.price;
    const worstPrice = Math.max(priceOne, priceTwo);
    const bestPrice = Math.min(priceOne, priceTwo);

    expect(selectors.calculateEconomyPercentage(exampleState)).toEqual(
      (worstPrice - bestPrice) / worstPrice
    );
  });
});
