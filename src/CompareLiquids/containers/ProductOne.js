// @flow
import { connect } from 'react-redux';
import { reduxForm, formValueSelector, reset } from 'redux-form';

import { validateCompareLiquidsForm } from '../validators';
import ProductOne from '../components/ProductForm';

const mapStateToProps = state => ({
  productName: 'PRODUTO 1',
  unit: formValueSelector('compareLiquidsProductOne')(state, 'unit'),
});

const mapDispatchToProps = dispatch => ({
  reset: () => dispatch(reset('compareLiquidsProductOne')),
});

const Component = connect(mapStateToProps, mapDispatchToProps)(ProductOne);
export default reduxForm({
  form: 'compareLiquidsProductOne',
  initialValues: { unit: 'L' },
  validate: validateCompareLiquidsForm,
})(Component);
