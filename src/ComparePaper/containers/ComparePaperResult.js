// @flow
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { calculate } from '../actions';
import { calculateProductSum } from '../selectors';

import ComparePaperResult from '../components/ComparePaperResult';

const mapStateToProps = state => ({
  calculated: calculateProductSum(state),
});

// const mapDispatchToProps = dispatch => ({
//   calculate: () => {
//     dispatch(calculate());
//   },
// });

export default connect(mapStateToProps)(ComparePaperResult);
