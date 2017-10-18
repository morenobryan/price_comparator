import { validateRequiredAndNumber } from '../shared/validators';

export const validateComparePaperForm = values => {
  const fieldsToValidate = ['rollAmount', 'rollWidth', 'price'];
  return validateRequiredAndNumber(fieldsToValidate, values);
};
