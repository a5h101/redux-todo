import { combineReducers } from 'redux';
import reducer from './amountReducer';

//a funciton to export all reducer functions in object form so they can be accesed and manipulated
const reducers = () => {
  return combineReducers({
    amount: reducer,
  });
};

export default reducers;
