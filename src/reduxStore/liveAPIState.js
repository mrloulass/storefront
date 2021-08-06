import axios from 'axios';

const api = 'https://api-js401.herokuapp.com/api/v1/products'

const initialState = { results: [] };

function liveAPIReducer (state = initialState, action){
  const { type, payload } = action;
  switch (type) {
    case 'GET_PRODUCTS':
      return payload;
    default:
      return state;
  }
};

//===== async actions is a curried function, that will take in dispatch, and getState ====//
export const getProducts = () => async (dispatch, getState) => {
  let response = await axios.get(api);
  let fetchedProducts = response.data.results;

  dispatch(setProducts(fetchedProducts));

}

export const postProducts = () => async (dispatch, getState) => {
  let response = await axios.post(api, {
    name: '',
    category: '',
    price: 0,
    description: ''
  });
  let newProducts = response.data.results;

  dispatch(setProducts(newProducts));

}
export const putProducts = (id, data) => async (dispatch, getState) => {
  let url = `${api}/${id}`
  let response = await axios.put(url).send(data);
  let fetchedIdProducts = response.data.results.id;

  dispatch(setProducts(fetchedIdProducts));

}

export const deleteProducts = (id, data) => async (dispatch, getState) => {
  let url = `${api}/${id}`
  let response = await axios.delete(url).send(data);
  let deleteIdProducts = response.data.results.id;

  dispatch(setProducts(deleteIdProducts));

}



//======= a regular Redux action creator ======//

export function setProducts(products) {
  return {
    type: 'GET_PRODUCTS',
    payload: products,
  }
}

export default liveAPIReducer;
