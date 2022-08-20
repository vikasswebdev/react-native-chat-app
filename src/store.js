import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {getPhoneNumber} from './reducers/conversation';

const rootReducer = combineReducers({
  getPhoneNumber: getPhoneNumber,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
