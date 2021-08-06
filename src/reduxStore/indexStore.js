import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk' ;

import productsReducer from './productsState.js';
import cartReducer from './cartState.js'
import categoriesReducer from './categoriesState.js'
import liveAPIReducer from './liveAPIState.js'

//======== give your states property a name =======//
let reducers = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  categories: categoriesReducer,
  data: liveAPIReducer
});

let middlewares = applyMiddleware(thunk);

//======= createStore() runs the reducers and returns an object that has all the redux store properties ==========//
export default createStore(reducers, composeWithDevTools(middlewares));

