// @flow
import { connect } from 'react-redux';
import { reduxForm, formValueSelector, reset } from 'redux-form';

import { validateCompareSolidsForm } from '../validators';
import ProductOne from '../components/ProductForm';

const mapStateToProps = state => ({
  productName: 'PRODUTO 1',
  unit: formValueSelector('compareSolidsProductOne')(state, 'unit'),
});

const mapDispatchToProps = dispatch => ({
  reset: () => dispatch(reset('compareSolidsProductOne')),
});

const Component = connect(mapStateToProps, mapDispatchToProps)(ProductOne);
export default reduxForm({
  form: 'compareSolidsProductOne',
  initialValues: { unit: 'g' },
  validate: validateCompareSolidsForm,
})(Component);
