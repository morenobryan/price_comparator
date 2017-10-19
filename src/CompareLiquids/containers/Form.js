// @flowR
import { connect } from 'react-redux';
import { isInvalid, isPristine, isSubmitting } from 'redux-form';

import FormComponent from './FormComponent';

const formOneDisabled = state =>
  isInvalid('compareLiquidsProductOne')(state) ||
  isPristine('compareLiquidsProductOne')(state) ||
  isSubmitting('compareLiquidsProductOne')(state);
const formTwoDisabled = state =>
  isInvalid('compareLiquidsProductTwo')(state) ||
  isPristine('compareLiquidsProductTwo')(state) ||
  isSubmitting('compareLiquidsProductTwo')(state);

const mapStateToProps = state => ({
  disabledSubmit: formOneDisabled(state) || formTwoDisabled(state),
});

export default connect(mapStateToProps)(FormComponent);
