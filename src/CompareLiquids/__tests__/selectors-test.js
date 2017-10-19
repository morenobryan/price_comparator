import * as selectors from '../selectors';

const exampleState = {
  form: {
    comparePaperProductOne: {
      values: {
        price: '3',
        rollAmount: '4',
        rollWidth: '5',
      },
    },
    comparePaperProductTwo: {
      values: {
        price: '5',
        rollAmount: '6',
        rollWidth: '7',
      },
    },
  },
};

const emptyExample = {
  form: {
    comparePaperProductOne: {
      values: {
        price: undefined,
        rollAmount: undefined,
        rollWidth: undefined,
      },
    },
    comparePaperProductTwo: {
      values: {
        price: undefined,
        rollAmount: undefined,
        rollWidth: undefined,
      },
    },
  },
};

/* Form */
describe('calculatePricePerUnitProductOne', () => {
  it('calculates the correct sum', () => {
    expect(selectors.calculatePricePerUnitProductOne(exampleState)).toEqual(
      exampleState.form.comparePaperProductOne.values.price /
        exampleState.form.comparePaperProductOne.values.rollAmount *
        exampleState.form.comparePaperProductOne.values.rollWidth
    );
  });
});

describe('calculatePricePerUnitProductTwo', () => {
  it('calculates the correct sum', () => {
    expect(selectors.calculatePricePerUnitProductTwo(exampleState)).toEqual(
      exampleState.form.comparePaperProductTwo.values.price /
        exampleState.form.comparePaperProductTwo.values.rollAmount *
        exampleState.form.comparePaperProductTwo.values.rollWidth
    );
  });
});

describe('calculateEconomyPercentage', () => {
  it('calculates the correct sum', () => {
    const priceOne =
      exampleState.form.comparePaperProductOne.values.price /
      exampleState.form.comparePaperProductOne.values.rollAmount *
      exampleState.form.comparePaperProductOne.values.rollWidth;

    const priceTwo =
      exampleState.form.comparePaperProductTwo.values.price /
      exampleState.form.comparePaperProductTwo.values.rollAmount *
      exampleState.form.comparePaperProductTwo.values.rollWidth;

    const worstPrice = Math.max(priceOne, priceTwo);
    const bestPrice = Math.min(priceOne, priceTwo);

    expect(selectors.calculateEconomyPercentage(exampleState)).toEqual(
      (worstPrice - bestPrice) / worstPrice * 100
    );
  });
});
