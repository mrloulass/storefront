import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import productsReducer from './productsState.js';

//======== give your states property a name =======//
let reducers = combineReducers({
  store: productsReducer,
});

//======= createStore() runs the reducers and returns an object that has all the redux store properties ==========//
export default createStore(reducers, composeWithDevTools());

