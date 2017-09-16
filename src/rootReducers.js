import { combineReducers } from "redux";

const dash = (state = {}, action) => {
  switch (action.type) {
    case "A":
      return { ...state };
      break;
    default:
      return state;
  }
};

export default combineReducers({
  dash
});
