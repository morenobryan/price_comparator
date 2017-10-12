import * as validators from '../validators';

const requiredError = 'Este campo é obrigatório';
const numberError = 'Somente números positivos são permitidos neste campo';

const fieldsToValidate = ['one', 'two', 'three'];

describe('validateRequiredAndNumber', () => {
  it('returns only the invalid fields giving precedence to the required errors', () => {
    const fieldValues = {
      one: '',
      two: undefined,
      three: '-5',
    };

    const expectedResponse = {
      one: requiredError,
      two: requiredError,
      three: numberError,
    };

    expect(validators.validateRequiredAndNumber(fieldsToValidate, fieldValues)).toEqual(
      expectedResponse
    );
  });

  it('returns nothing when there are no errors', () => {
    const fieldValues = {
      one: 3,
      two: 4,
      three: 5,
    };

    const expectedResponse = {};

    expect(validators.validateRequiredAndNumber(fieldsToValidate, fieldValues)).toEqual(
      expectedResponse
    );
  });
});

describe('validateRequired', () => {
  it('returns only the invalid fields', () => {
    const fieldValues = {
      one: '',
      two: undefined,
      three: 'any string',
    };

    const expectedResponse = {
      one: requiredError,
      two: requiredError,
    };

    expect(validators.validateRequired(fieldsToValidate, fieldValues)).toEqual(expectedResponse);
  });

  it('returns all the fields when they are all incorrect', () => {
    const fieldValues = {
      one: '',
      two: undefined,
      three: undefined,
    };

    const expectedResponse = {
      one: requiredError,
      two: requiredError,
      three: requiredError,
    };

    expect(validators.validateRequired(fieldsToValidate, fieldValues)).toEqual(expectedResponse);
  });

  it('returns nothing when there are no errors', () => {
    const fieldValues = {
      one: 'test',
      two: 'test',
      three: 'test',
    };

    const expectedResponse = {};

    expect(validators.validateRequired(fieldsToValidate, fieldValues)).toEqual(expectedResponse);
  });
});

describe('validateNumeric', () => {
  it('returns only the invalid fields', () => {
    const fieldValues = {
      one: '',
      two: -5,
      three: 3.14,
    };

    const expectedResponse = {
      one: numberError,
      two: numberError,
    };

    expect(validators.validateNumeric(fieldsToValidate, fieldValues)).toEqual(expectedResponse);
  });

  it('returns all the fields when they are all incorrect', () => {
    const fieldValues = {
      one: Infinity,
      two: undefined,
      three: NaN,
    };

    const expectedResponse = {
      one: numberError,
      two: numberError,
      three: numberError,
    };

    expect(validators.validateNumeric(fieldsToValidate, fieldValues)).toEqual(expectedResponse);
  });

  it('returns an empty object when there is no incorrect field', () => {
    const fieldValues = {
      one: '3.14',
      two: '4',
      three: 456,
    };

    const expectedResponse = {};

    expect(validators.validateNumeric(fieldsToValidate, fieldValues)).toEqual(expectedResponse);
  });
});
