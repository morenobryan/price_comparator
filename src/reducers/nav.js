import { combineReducers } from 'redux';
import { Root } from '../Router/router';

const initialState = Root.router.getStateForAction(
  Root.router.getActionForPathAndParams('Dashboard')
);

export default (state = initialState, action) => {
  const nextState = Root.router.getStateForAction(action, state);

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};
