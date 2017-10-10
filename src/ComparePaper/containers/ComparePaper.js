// @flow
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { calculate } from '../actions';
import { calculateProductSum } from '../selectors';

import ComparePaper from '../components/ComparePaper';

const mapStateToProps = state => ({
  calculated: calculateProductSum(state),
});

const mapDispatchToProps = dispatch => ({
  calculate: () => {
    dispatch(calculate());
  },

  nextInput: () => {},
});

const Component = connect(mapStateToProps, mapDispatchToProps)(ComparePaper);
export default reduxForm({
  form: 'comparePaper',
  validate: values => {
    const errors = {};

    errors.rollAmount = !values.rollAmount ? 'Este campo é obrigatório' : undefined;
    errors.rollWidth = !values.rollWidth ? 'Este campo é obrigatório' : undefined;
    errors.widthUnit = !values.widthUnit ? 'Este campo é obrigatório' : undefined;
    errors.price = !values.price ? 'Este campo é obrigatório' : undefined;

    return errors;
  },
})(Component);
