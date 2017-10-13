// @flow
import { connect } from 'react-redux';
import { isInvalid, isPristine, isSubmitting } from 'redux-form';

import FormComponent from './FormComponent';

const formOneDisabled = state =>
  isInvalid('comparePaperProductOne')(state) ||
  isPristine('comparePaperProductOne')(state) ||
  isSubmitting('comparePaperProductOne')(state);
const formTwoDisabled = state =>
  isInvalid('comparePaperProductTwo')(state) ||
  isPristine('comparePaperProductTwo')(state) ||
  isSubmitting('comparePaperProductTwo')(state);

const mapStateToProps = state => ({
  disabledSubmit: formOneDisabled(state) || formTwoDisabled(state),
});

export default connect(mapStateToProps)(FormComponent);
