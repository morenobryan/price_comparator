// @flow
import { connect } from "react-redux";
import { reduxForm } from "redux-form";

// import {} from "../actions";
// import {} from "../selectors";

import ComparePaper from "../components/ComparePaper";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

const Component = connect(mapStateToProps, mapDispatchToProps)(ComparePaper);
export default reduxForm({
  form: "comparePaper"
})(Component);
