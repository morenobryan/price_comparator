// @flow
import { connect } from 'react-redux';
import { reduxForm, formValueSelector } from 'redux-form';

import { validateCompareSolidsForm } from '../validators';
import ProductOne from '../components/ProductForm';

const mapStateToProps = state => ({
  productName: 'PRODUTO 2',
  unit: formValueSelector('compareSolidsProductTwo')(state, 'unit'),
});

const Component = connect(mapStateToProps)(ProductOne);
export default reduxForm({
  form: 'compareSolidsProductTwo',
  initialValues: { unit: 'g' },
  validate: validateCompareSolidsForm,
})(Component);
