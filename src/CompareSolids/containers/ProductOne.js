// @flow
import { connect } from 'react-redux';
import { reduxForm, formValueSelector } from 'redux-form';

import { validateCompareSolidsForm } from '../validators';
import ProductOne from '../components/ProductForm';

const mapStateToProps = state => ({
  productName: 'PRODUTO 1',
  unit: formValueSelector('compareSolidsProductOne')(state, 'unit'),
});

const Component = connect(mapStateToProps)(ProductOne);
export default reduxForm({
  form: 'compareSolidsProductOne',
  initialValues: { unit: 'g' },
  validate: validateCompareSolidsForm,
})(Component);
