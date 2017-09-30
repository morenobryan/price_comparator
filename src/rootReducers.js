// @flow
import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

const dash = (state = {}, action: { type: string }) => {
  switch (action.type) {
    case 'A':
      return { ...state };
    default:
      return state;
  }
};

export default combineReducers({
  dash,
  form,
});
