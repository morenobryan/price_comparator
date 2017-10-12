// @flow
import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import nav from './reducers/nav';
import comparePaper from './ComparePaper/rootReducer';

export default combineReducers({
  comparePaper,
  form,
  nav,
});
