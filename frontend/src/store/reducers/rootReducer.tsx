import { combineReducers } from 'redux';
import items from './items';
import filterState from './filter';

const rootReducer = combineReducers({
  items,
  filterState,
});

export default rootReducer;
