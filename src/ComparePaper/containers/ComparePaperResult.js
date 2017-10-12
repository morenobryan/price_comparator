// @flow
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { calculateProductSum } from '../selectors';

import ComparePaperResult from '../components/ComparePaperResult';

const mapStateToProps = state => ({
  calculated: calculateProductSum(state),
});

// const mapDispatchToProps = dispatch => ({
// });

export default connect(mapStateToProps)(ComparePaperResult);
