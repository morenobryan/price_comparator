// @flow
import { reduxForm } from 'redux-form';

import { validateComparePaperForm } from '../validation';

import FormComponent from './FormComponent';

export default reduxForm({
  form: 'comparePaper',
  validate: validateComparePaperForm,
})(FormComponent);
