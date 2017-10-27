// @flow
import { connect } from 'react-redux';
import { reduxForm, formValueSelector, reset } from 'redux-form';

import { validateCompareLiquidsForm } from '../validators';
import ProductOne from '../components/ProductForm';

const mapStateToProps = state => ({
  productName: 'PRODUTO 2',
  unit: formValueSelector('compareLiquidsProductTwo')(state, 'unit'),
});

const mapDispatchToProps = dispatch => ({
  reset: () => dispatch(reset('compareLiquidsProductTwo')),
});

const Component = connect(mapStateToProps, mapDispatchToProps)(ProductOne);
export default reduxForm({
  form: 'compareLiquidsProductTwo',
  initialValues: { unit: 'L' },
  validate: validateCompareLiquidsForm,
})(Component);
