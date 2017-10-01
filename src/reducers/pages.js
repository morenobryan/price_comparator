import { combineReducers } from 'redux';
import ComparePaperReducers from '../ComparePaper/rootReducer';

export default combineReducers({
  comparePaper: ComparePaperReducers,
});
