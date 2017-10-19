import { validateRequiredAndNumber } from '../shared/validators';

export const validateCompareLiquidsForm = values => {
  const fieldsToValidate = ['quantity', 'volume', 'price'];
  return validateRequiredAndNumber(fieldsToValidate, values);
};
