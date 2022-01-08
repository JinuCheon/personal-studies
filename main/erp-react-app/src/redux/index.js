import { combineReducers } from 'redux';
import inventory from './inventory';
import newProductInputBox from './newProductInputBox'

const rootReducer = combineReducers({
  inventory,
  newProductInputBox
});

export default rootReducer;
