import * as t from '../actionTypes';

export default (state = { unit: 'm' }, action) => {
  switch (action.type) {
    case t.SET_UNIT:
      return { ...state, unit: action.unit };

    default:
      return state;
  }
};
