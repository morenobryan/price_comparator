// @flow
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { validateCompareLiquidsForm } from '../validators';
import ProductOne from '../components/ProductForm';

const mapStateToProps = state => ({
  productName: 'PRODUTO 2',
});

const Component = connect(mapStateToProps)(ProductOne);
export default reduxForm({
  form: 'compareLiquidsProductTwo',
  validate: validateCompareLiquidsForm,
})(Component);
