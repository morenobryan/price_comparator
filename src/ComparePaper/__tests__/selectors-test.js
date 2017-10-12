import * as selectors from '../selectors';

const exampleState = {
  comparePaper: {
    ui: {
      unit: 'cm',
    },
  },
  form: {
    comparePaper: {
      values: {
        price: '3',
        rollAmount: '4',
        rollWidth: '5',
      },
    },
  },
};

const emptyExample = {
  comparePaper: {
    ui: {
      unit: undefined,
    },
  },
};

/* UI */
describe('getUi', () => {
  it('should get the correct ui node', () => {
    expect(selectors.getUi(exampleState)).toEqual(exampleState.comparePaper.ui);
  });
});

describe('getUnit', () => {
  it('gets the current unit', () => {
    expect(selectors.getUnit(exampleState)).toEqual(exampleState.comparePaper.ui.unit);
  });

  it("gets unit's empty state", () => {
    expect(selectors.getUnit(emptyExample)).toEqual('m');
  });
});

/* Form */
describe('calculateProductSum', () => {
  it('calculates the correct sum', () => {
    expect(selectors.calculateProductSum(exampleState)).toEqual(
      exampleState.form.comparePaper.values.rollAmount *
        exampleState.form.comparePaper.values.rollWidth /
        exampleState.form.comparePaper.values.price
    );
  });
});
