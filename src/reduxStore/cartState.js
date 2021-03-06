import {createSlice}  from '@reduxjs/toolkit'



// const initialState = [];

//====== 2 things that the reducer needs to run properly =====//

const cartSlice = createSlice({
name: 'cart',
initialState: [],
reducers: {
  addToCart(state, action) {
    state.push({ name: action.payload })
  },
  removeFromCart(state, action){
    return state.filter( item => item.name !== action.payload )
  },

}
})



export const {addToCart, removeFromCart} = cartSlice.actions


// function cartReducer(state = initialState, action) {
//   switch (action.type) {
//     case 'ADD_TO_CART':
//       //====== check if payload is already in the cart, and use the new one =====//
//       return state = [...state, action.payload];
//     case 'REMOVE_FROM_CART':
//       return state = [...state, action.payload];
//     default:
//       return state;
//   }
// }

//=== actions are defined in there own file, they are functions that return (plain old javascript objects) ====/
  // export function addToCart(product){
  //   return{
  //     type:'ADD_TO_CART',
  //     payload: product,
  //   }
  // }

  // export function removeFromCart(product){
  //   return{
  //     type:'REMOVE_FROM_CART',
  //     payload: product,
  //   }
  // }


// export default cartReducer;
export default cartSlice.reducer;


