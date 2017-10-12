const requiredError = 'Este campo é obrigatório';
const numberError = 'Somente números positivos são permitidos neste campo';

export const validateComparePaperForm = values => {
  const fieldsToValidate = ['rollAmount', 'rollWidth', 'price'];
  return validateRequiredAndNumber(fieldsToValidate, values);
};

export const validateRequiredAndNumber = (fieldsToValidate, values) => {
  const errors = {};

  fieldsToValidate.forEach(key => {
    if (!values[key]) {
      errors[key] = requiredError;
    } else if (Number.isNaN(Number(values[key])) || Number(values[key]) <= 0) {
      errors[key] = numberError;
    }
  });

  return errors;
};
