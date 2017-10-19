import { validateRequiredAndNumber } from '../shared/validators';

export const validateCompareSolidsForm = values => {
  const fieldsToValidate = ['quantity', 'mass', 'price'];
  return validateRequiredAndNumber(fieldsToValidate, values);
};
