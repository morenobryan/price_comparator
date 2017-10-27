// @flow
import { connect } from 'react-redux';
import { reduxForm, formValueSelector, reset } from 'redux-form';

import { validateComparePaperForm } from '../validators';
import ProductOne from '../components/ProductForm';

const mapStateToProps = state => ({
  productName: 'PRODUTO 1',
  unit: formValueSelector('comparePaperProductOne')(state, 'widthUnit'),
});

const mapDispatchToProps = dispatch => ({
  reset: () => dispatch(reset('comparePaperProductOne')),
});

const Component = connect(mapStateToProps, mapDispatchToProps)(ProductOne);
export default reduxForm({
  form: 'comparePaperProductOne',
  initialValues: { widthUnit: 'm' },
  validate: validateComparePaperForm,
})(Component);
