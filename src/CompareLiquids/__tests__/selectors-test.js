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
        price: '10',
        quantity: '20',
        volume: '25',
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
    expect(selectors.calculatePricePerUnitProductOne(exampleState)).toEqual(0.15);
  });

  it('calculates the correct sum with mL', () => {
    const state = {
      form: {
        compareLiquidsProductOne: {
          values: {
            price: '3',
            quantity: '4',
            volume: '5',
            unit: 'mL',
          },
        },
      },
    };
    expect(selectors.calculatePricePerUnitProductOne(state)).toEqual(150);
  });

  it('calculates the correct sum', () => {
    const state = {
      form: {
        compareLiquidsProductOne: {
          values: {
            price: '6',
            quantity: '1',
            volume: '0.012',
            unit: 'L',
          },
        },
      },
    };
    expect(selectors.calculatePricePerUnitProductOne(state)).toEqual(500);
  });

  it('calculates the correct sum with mL', () => {
    const state = {
      form: {
        compareLiquidsProductOne: {
          values: {
            price: '6',
            quantity: '1',
            volume: '12',
            unit: 'mL',
          },
        },
      },
    };
    expect(selectors.calculatePricePerUnitProductOne(state)).toEqual(500);
  });
});

describe('calculatePricePerUnitProductTwo', () => {
  it('calculates the correct sum', () => {
    expect(selectors.calculatePricePerUnitProductTwo(exampleState)).toEqual(20);
  });

  it('calculates the correct sum with L', () => {
    const state = {
      form: {
        compareLiquidsProductTwo: {
          values: {
            price: '10',
            quantity: '20',
            volume: '25',
            unit: 'L',
          },
        },
      },
    };
    expect(selectors.calculatePricePerUnitProductTwo(state)).toEqual(0.02);
  });

  it('calculates the correct sum', () => {
    const state = {
      form: {
        compareLiquidsProductTwo: {
          values: {
            price: '6',
            quantity: '1',
            volume: '0.012',
            unit: 'L',
          },
        },
      },
    };
    expect(selectors.calculatePricePerUnitProductTwo(state)).toEqual(500);
  });

  it('calculates the correct sum with mL', () => {
    const state = {
      form: {
        compareLiquidsProductTwo: {
          values: {
            price: '6',
            quantity: '1',
            volume: '12',
            unit: 'mL',
          },
        },
      },
    };
    expect(selectors.calculatePricePerUnitProductTwo(state)).toEqual(500);
  });
});

describe('calculateWorstProduct', () => {
  it('calculates the worst product when it is the second product', () => {
    expect(selectors.calculateWorstProduct(exampleState)).toEqual(20);
  });

  it('calculates the worst product when it is the first product', () => {
    const state = {
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
            price: '1',
            quantity: '1',
            volume: '100',
            unit: 'L',
          },
        },
      },
    };

    expect(selectors.calculateWorstProduct(state)).toEqual(0.15);
  });
});

describe('calculateEconomyPercentage', () => {
  it('calculates the correct economy percentage', () => {
    expect(selectors.calculateEconomyPercentage(exampleState)).toEqual(0.9925);
  });

  it('calculates the worst product when it is the first product', () => {
    const state = {
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
            price: '1',
            quantity: '1',
            volume: '100',
            unit: 'L',
          },
        },
      },
    };

    expect(selectors.calculateEconomyPercentage(state)).toEqual(0.9333333333333332);
  });
});
