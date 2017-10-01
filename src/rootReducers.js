// @flow
import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import nav from './reducers/nav';

export default combineReducers({
  form,
  nav,
});
