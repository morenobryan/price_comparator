// @flow
import { connect } from 'react-redux';
import { reduxForm, formValueSelector } from 'redux-form';

import { validateCompareLiquidsForm } from '../validators';
import ProductOne from '../components/ProductForm';

const mapStateToProps = state => ({
  productName: 'PRODUTO 1',
  unit: formValueSelector('compareLiquidsProductOne')(state, 'unit'),
});

const Component = connect(mapStateToProps)(ProductOne);
export default reduxForm({
  form: 'compareLiquidsProductOne',
  initialValues: { unit: 'L' },
  validate: validateCompareLiquidsForm,
})(Component);
