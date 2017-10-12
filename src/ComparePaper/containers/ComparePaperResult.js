// @flow
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { calculateProductSum } from '../selectors';

import ComparePaperResult from '../components/ComparePaperResult';

const mapStateToProps = state => ({
  calculated: calculateProductSum(state),
});

export default connect(mapStateToProps)(ComparePaperResult);
