import * as selectors from '../selectors';

const exampleState = {
  form: {
    compareSolidsProductOne: {
      values: {
        price: '3',
        quantity: '4',
        mass: '5',
        unit: 'kg',
      },
    },
    compareSolidsProductTwo: {
      values: {
        price: '10',
        quantity: '20',
        mass: '25',
        unit: 'g',
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
    expect(selectors.calculatePricePerUnitProductOne(exampleState)).toEqual(0.15);
  });

  it('calculates the correct sum with g', () => {
    const state = {
      form: {
        compareSolidsProductOne: {
          values: {
            price: '3',
            quantity: '4',
            mass: '5',
            unit: 'g',
          },
        },
      },
    };
    expect(selectors.calculatePricePerUnitProductOne(state)).toEqual(150);
  });

  it('calculates the correct sum', () => {
    const state = {
      form: {
        compareSolidsProductOne: {
          values: {
            price: '6',
            quantity: '1',
            mass: '0.012',
            unit: 'kg',
          },
        },
      },
    };
    expect(selectors.calculatePricePerUnitProductOne(state)).toEqual(500);
  });

  it('calculates the correct sum with g', () => {
    const state = {
      form: {
        compareSolidsProductOne: {
          values: {
            price: '6',
            quantity: '1',
            mass: '12',
            unit: 'g',
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
        compareSolidsProductTwo: {
          values: {
            price: '10',
            quantity: '20',
            mass: '25',
            unit: 'kg',
          },
        },
      },
    };
    expect(selectors.calculatePricePerUnitProductTwo(state)).toEqual(0.02);
  });

  it('calculates the correct sum', () => {
    const state = {
      form: {
        compareSolidsProductTwo: {
          values: {
            price: '6',
            quantity: '1',
            mass: '0.012',
            unit: 'kg',
          },
        },
      },
    };
    expect(selectors.calculatePricePerUnitProductTwo(state)).toEqual(500);
  });

  it('calculates the correct sum with g', () => {
    const state = {
      form: {
        compareSolidsProductTwo: {
          values: {
            price: '6',
            quantity: '1',
            mass: '12',
            unit: 'g',
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
        compareSolidsProductOne: {
          values: {
            price: '3',
            quantity: '4',
            mass: '5',
            unit: 'kg',
          },
        },
        compareSolidsProductTwo: {
          values: {
            price: '1',
            quantity: '1',
            mass: '100',
            unit: 'kg',
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
        compareSolidsProductOne: {
          values: {
            price: '3',
            quantity: '4',
            mass: '5',
            unit: 'kg',
          },
        },
        compareSolidsProductTwo: {
          values: {
            price: '1',
            quantity: '1',
            mass: '100',
            unit: 'kg',
          },
        },
      },
    };

    expect(selectors.calculateEconomyPercentage(state)).toEqual(0.9333333333333332);
  });
});
