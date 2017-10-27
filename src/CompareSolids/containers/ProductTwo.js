// @flow
import { connect } from 'react-redux';
import { reduxForm, formValueSelector, reset } from 'redux-form';

import { validateCompareSolidsForm } from '../validators';
import ProductOne from '../components/ProductForm';

const mapStateToProps = state => ({
  productName: 'PRODUTO 2',
  unit: formValueSelector('compareSolidsProductTwo')(state, 'unit'),
});

const mapDispatchToProps = dispatch => ({
  reset: () => dispatch(reset('compareSolidsProductTwo')),
});

const Component = connect(mapStateToProps, mapDispatchToProps)(ProductOne);
export default reduxForm({
  form: 'compareSolidsProductTwo',
  initialValues: { unit: 'g' },
  validate: validateCompareSolidsForm,
})(Component);
