import { validateRequiredAndNumber } from '../shared/validation';

export const validateComparePaperForm = values => {
  const fieldsToValidate = ['rollAmount', 'rollWidth', 'price'];
  return validateRequiredAndNumber(fieldsToValidate, values);
};
