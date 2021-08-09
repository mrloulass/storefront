import axios from 'axios';

import { createSlice } from '@reduxjs/toolkit';
const api = 'https://api-js401.herokuapp.com/api/v1/products'

const liveAPISlice = createSlice({
  name: 'API',
  initialState: [{ results: [] }],
  reducers: {
    getProducts(state, action) {
      state.push({ results: action.payload })
    }
  }
})

export const { getProducts } = liveAPISlice.actions
// const initialState = { results: [] };

// function liveAPIReducer (state = initialState, action){
//   const { type, payload } = action;
//   switch (type) {
//     case 'GET_PRODUCTS':
//       return payload;
//     default:
//       return state;
//   }
// };

//===== async actions is a curried function, that will take in dispatch, and getState ====//
export const getItem = () => async (dispatch, getState) => {
  let response = await axios.get(api);
  let fetchedProducts = response.data.results;

  dispatch(getProducts(fetchedProducts));

}

export const postItem = () => async (dispatch, getState) => {
  let response = await axios.post(api, {
    name: '',
    category: '',
    price: 0,
    description: ''
  });
  let newProducts = response.data.results;

  dispatch(getProducts(newProducts));

}
export const putItem = (id, data) => async (dispatch, getState) => {
  let url = `${api}/${id}`
  let response = await axios.put(url).send(data);
  let fetchedIdProducts = response.data.results.id;

  dispatch(getProducts(fetchedIdProducts));

}

export const deleteItem = (id, data) => async (dispatch, getState) => {
  let url = `${api}/${id}`
  let response = await axios.delete(url).send(data);
  let deleteIdProducts = response.data.results.id;

  dispatch(getProducts(deleteIdProducts));

}



//======= a regular Redux action creator ======//

// export function setProducts(products) {
//   return {
//     type: 'GET_PRODUCTS',
//     payload: products,
//   }
// }

export default liveAPISlice.reducer;
