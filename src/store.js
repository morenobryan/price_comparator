import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import createLoggerMiddleware from "redux-logger";

import rootReducer from "./rootReducers";

const middlewares = [thunk];

if (__DEV__ === true) {
  const logger = createLoggerMiddleware({ collapsed: true, duration: true });
  middlewares.push(logger);
}

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);
