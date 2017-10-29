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
        price: '10',
        quantity: '20',
        rollWidth: '25',
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
    expect(selectors.calculatePricePerUnitProductOne(exampleState)).toEqual(0.15);
  });

  it('calculates the correct sum with mL', () => {
    const state = {
      form: {
        comparePaperProductOne: {
          values: {
            price: '3',
            quantity: '4',
            rollWidth: '5',
            widthUnit: 'cm',
          },
        },
      },
    };
    expect(selectors.calculatePricePerUnitProductOne(state)).toEqual(15);
  });

  it('calculates the correct sum', () => {
    const state = {
      form: {
        comparePaperProductOne: {
          values: {
            price: '6',
            quantity: '1',
            rollWidth: '0.012',
            widthUnit: 'm',
          },
        },
      },
    };
    expect(selectors.calculatePricePerUnitProductOne(state)).toEqual(500);
  });

  it('calculates the correct sum with mL', () => {
    const state = {
      form: {
        comparePaperProductOne: {
          values: {
            price: '6',
            quantity: '1',
            rollWidth: '12',
            widthUnit: 'cm',
          },
        },
      },
    };
    expect(selectors.calculatePricePerUnitProductOne(state)).toEqual(50);
  });
});

describe('calculatePricePerUnitProductTwo', () => {
  it('calculates the correct sum', () => {
    expect(selectors.calculatePricePerUnitProductTwo(exampleState)).toEqual(2);
  });

  it('calculates the correct sum with L', () => {
    const state = {
      form: {
        comparePaperProductTwo: {
          values: {
            price: '10',
            quantity: '20',
            rollWidth: '25',
            widthUnit: 'm',
          },
        },
      },
    };
    expect(selectors.calculatePricePerUnitProductTwo(state)).toEqual(0.02);
  });

  it('calculates the correct sum', () => {
    const state = {
      form: {
        comparePaperProductTwo: {
          values: {
            price: '6',
            quantity: '1',
            rollWidth: '0.012',
            widthUnit: 'm',
          },
        },
      },
    };
    expect(selectors.calculatePricePerUnitProductTwo(state)).toEqual(500);
  });

  it('calculates the correct sum with mL', () => {
    const state = {
      form: {
        comparePaperProductTwo: {
          values: {
            price: '6',
            quantity: '1',
            rollWidth: '12',
            widthUnit: 'cm',
          },
        },
      },
    };
    expect(selectors.calculatePricePerUnitProductTwo(state)).toEqual(50);
  });
});

describe('calculateWorstProduct', () => {
  it('calculates the worst product when it is the second product', () => {
    expect(selectors.calculateWorstProduct(exampleState)).toEqual(2);
  });

  it('calculates the worst product when it is the first product', () => {
    const state = {
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
            price: '1',
            quantity: '1',
            rollWidth: '100',
            widthUnit: 'm',
          },
        },
      },
    };

    expect(selectors.calculateWorstProduct(state)).toEqual(0.15);
  });
});

describe('calculateEconomyPercentage', () => {
  it('calculates the correct economy percentage', () => {
    expect(selectors.calculateEconomyPercentage(exampleState)).toEqual(0.925);
  });

  it('calculates the worst product when it is the first product', () => {
    const state = {
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
            price: '1',
            quantity: '1',
            rollWidth: '100',
            widthUnit: 'm',
          },
        },
      },
    };

    expect(selectors.calculateEconomyPercentage(state)).toEqual(0.9333333333333332);
  });
});
