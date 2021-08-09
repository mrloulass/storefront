import { combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { configureStore } from '@reduxjs/toolkit';

import thunk from 'redux-thunk' ;

// import productsReducer from './productsState.js';
// import cartReducer from './cartState.js'
// import categoriesReducer from './categoriesState.js'
// import liveAPIReducer from './liveAPIState.js'

import productsSlice from './productsState.js';
import cartSlice from './cartState.js';
import categoriesSlice from './categoriesState.js';
import liveAPISlice from './liveAPIState.js';

//======== give your states property a name =======//
const reducers = combineReducers({
  products: productsSlice,
  cart: cartSlice,
  categories: categoriesSlice,
  data: liveAPISlice
});

const middlewares = applyMiddleware(thunk);

const store = configureStore({reducer:reducers},composeWithDevTools(middlewares));

//======= createStore() runs the reducers and returns an object that has all the redux store properties ==========//
// export default createStore(reducers, composeWithDevTools(middlewares));

export default store;
