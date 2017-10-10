import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import createLoggerMiddleware from 'redux-logger';

import rootReducer from './rootReducers';

const middlewares = [thunk];

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));
