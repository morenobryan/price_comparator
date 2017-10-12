const requiredError = 'Este campo é obrigatório';
const numberError = 'Somente números positivos são permitidos neste campo';

export const validateRequiredAndNumber = (fieldsToValidate, values) => ({
  ...validateNumeric(fieldsToValidate, values),
  ...validateRequired(fieldsToValidate, values),
});

export const validateRequired = (fieldsToValidate, values) => {
  const errors = {};

  fieldsToValidate.forEach(key => {
    if (!values[key]) {
      errors[key] = requiredError;
    }
  });

  return errors;
};

export const validateNumeric = (fieldsToValidate, values) => {
  const errors = {};

  fieldsToValidate.forEach(key => {
    const number = Number(values[key]);
    if (Number.isNaN(number) || !Number.isFinite(number) || number <= 0) {
      errors[key] = numberError;
    }
  });

  return errors;
};
