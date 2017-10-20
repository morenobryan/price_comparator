import { validateRequiredAndNumber } from '../shared/validators';

export const validateComparePaperForm = values => {
  const fieldsToValidate = ['quantity', 'rollWidth', 'price'];
  return validateRequiredAndNumber(fieldsToValidate, values);
};
