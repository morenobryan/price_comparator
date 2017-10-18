// @flow
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { validateComparePaperForm } from '../validators';
import ProductOne from '../components/ProductForm';

const mapStateToProps = state => ({
  productName: 'PRODUTO 1',
});

const Component = connect(mapStateToProps)(ProductOne);
export default reduxForm({
  form: 'comparePaperProductOne',
  validate: validateComparePaperForm,
})(Component);
