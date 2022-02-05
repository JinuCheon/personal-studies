import { combineReducers } from 'redux';
import inventory from './inventory';
import newProductInputBox from './newProductInputBox'
import shipping from './shipping'
import newShippingInputBox from './newShippingInputBox';

const rootReducer = combineReducers({
  inventory,
  newProductInputBox,
  shipping,
  newShippingInputBox
});

export default rootReducer;
