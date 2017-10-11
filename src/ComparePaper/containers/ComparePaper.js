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
});

const Component = connect(mapStateToProps, mapDispatchToProps)(ComparePaper);
export default reduxForm({
  form: 'comparePaper',
  validate: values => {
    const errors = {};
    const requiredError = 'Este campo é obrigatório';
    const numberError = 'Somente números positivos são permitidos neste campo';

    if (!values.rollAmount) {
      errors.rollAmount = requiredError;
    } else if (Number.isNaN(Number(values.rollAmount)) || Number(values.rollAmount) <= 0) {
      errors.rollAmount = numberError;
    }

    if (!values.rollWidth) {
      errors.rollWidth = requiredError;
    } else if (Number.isNaN(Number(values.rollWidth)) || Number(values.rollAmount) <= 0) {
      errors.rollWidth = numberError;
    }

    if (!values.price) {
      errors.price = requiredError;
    } else if (Number.isNaN(Number(values.price)) || Number(values.rollAmount) <= 0) {
      errors.price = numberError;
    }

    return errors;
  },
})(Component);
