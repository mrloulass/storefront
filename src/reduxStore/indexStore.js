import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import productsReducer from './productsState.js';
import cartReducer from './cartState.js'
import categoriesReducer from './categoriesState'


//======== give your states property a name =======//
let reducers = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  categories: categoriesReducer,
  
});

//======= createStore() runs the reducers and returns an object that has all the redux store properties ==========//
export default createStore(reducers, composeWithDevTools());

