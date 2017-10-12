// @flow
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { setUnit } from '../actions';
import { getUnit } from '../selectors';
import { validateComparePaperForm } from '../validation';

import ProductOne from '../components/ProductForm';

const mapStateToProps = state => ({
  unit: getUnit(state),
});

const mapDispatchToProps = dispatch => ({
  setCentimeterUnit: () => dispatch(setUnit('cm')),
  setMeterUnit: () => dispatch(setUnit('m')),
});

const Component = connect(mapStateToProps, mapDispatchToProps)(ProductOne);
export default reduxForm({
  form: 'comparePaperProductTwo',
  validate: validateComparePaperForm,
})(Component);
