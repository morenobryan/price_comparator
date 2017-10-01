// @flow
import { connect } from 'react-redux';
import AppNavigator from '../components/AppNavigator';

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppNavigator);
