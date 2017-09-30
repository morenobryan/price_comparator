// @flow
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { calculate } from '../actions';
// import {} from "../selectors";

import ComparePaper from '../components/ComparePaper';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  calculate: () => {
    dispatch(calculate());
  },
});

const Component = connect(mapStateToProps, mapDispatchToProps)(ComparePaper);
export default reduxForm({
  form: 'comparePaper',
})(Component);
