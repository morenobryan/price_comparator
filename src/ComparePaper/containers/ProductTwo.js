// @flow
import { connect } from 'react-redux';
import { reduxForm, formValueSelector } from 'redux-form';

import { validateComparePaperForm } from '../validators';
import ProductOne from '../components/ProductForm';

const mapStateToProps = state => ({
  productName: 'PRODUTO 2',
  unit: formValueSelector('comparePaperProductTwo')(state, 'widthUnit'),
});

const Component = connect(mapStateToProps)(ProductOne);
export default reduxForm({
  form: 'comparePaperProductTwo',
  initialValues: { widthUnit: 'm' },
  validate: validateComparePaperForm,
})(Component);
