// @flow
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { validateCompareLiquidsForm } from '../validators';
import ProductOne from '../components/ProductForm';

const mapStateToProps = state => ({
  productName: 'PRODUTO 1',
});

const Component = connect(mapStateToProps)(ProductOne);
export default reduxForm({
  form: 'compareLiquidsProductOne',
  validate: validateCompareLiquidsForm,
})(Component);
