// @flow
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { validateCompareSolidsForm } from '../validators';
import ProductOne from '../components/ProductForm';

const mapStateToProps = state => ({
  productName: 'PRODUTO 1',
});

const Component = connect(mapStateToProps)(ProductOne);
export default reduxForm({
  form: 'compareSolidsProductOne',
  validate: validateCompareSolidsForm,
})(Component);
