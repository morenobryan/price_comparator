// @flow
import { connect } from 'react-redux';
import { isInvalid, isPristine, isSubmitting } from 'redux-form';

import FormComponent from './FormComponent';

const mapStateToProps = state => ({
  formOneDisabled:
    isInvalid('comparePaperProductOne')(state) ||
    isPristine('comparePaperProductOne')(state) ||
    isSubmitting('comparePaperProductOne')(state),
  formTwoDisabled:
    isInvalid('comparePaperProductTwo')(state) ||
    isPristine('comparePaperProductTwo')(state) ||
    isSubmitting('comparePaperProductTwo')(state),
});

export default connect(mapStateToProps)(FormComponent);
