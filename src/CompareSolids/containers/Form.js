// @flowR
import { connect } from 'react-redux';
import { isInvalid, isPristine, isSubmitting } from 'redux-form';

import FormComponent from './FormComponent';

const formOneDisabled = state =>
  isInvalid('compareSolidsProductOne')(state) ||
  isPristine('compareSolidsProductOne')(state) ||
  isSubmitting('compareSolidsProductOne')(state);
const formTwoDisabled = state =>
  isInvalid('compareSolidsProductTwo')(state) ||
  isPristine('compareSolidsProductTwo')(state) ||
  isSubmitting('compareSolidsProductTwo')(state);

const mapStateToProps = state => ({
  disabledSubmit: formOneDisabled(state) || formTwoDisabled(state),
});

export default connect(mapStateToProps)(FormComponent);
