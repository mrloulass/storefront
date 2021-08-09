import {createSlice} from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name:'categories',
  initialState: {categorylist:[
    { displayName: 'Clothing', normalizedName: 'clothing', description: 'clothing from the pass' },
    { displayName: 'Toys', normalizedName: 'toys', description: 'toys from the pass' },
    { displayName: 'Video Games', normalizedName: 'video games', description: 'video games from the pass' },
  ]},
  activeCategory: '',
  reducers:{
    activateCategory(state, action){
    state.push( {activeCategory:action.payload })
  }
}
})

export const {activateCategory} = categoriesSlice.actions



// const initialState = {
//   list: [
//     { displayName: 'Clothing', normalizedName: 'clothing', description: 'clothing from the pass' },
//     { displayName: 'Toys', normalizedName: 'toys', description: 'toys from the pass' },
//     { displayName: 'Video Games', normalizedName: 'video games', description: 'video games from the pass' },
//   ],
//   activeCategory: '',
// }
// function categoriesReducer(state = initialState, action) {
//   switch (action.type) {
//     case 'ACTIVATE_CATEGORY':
//       return { ...state, activeCategory: action.payload }
//     default:
//       return state;
//   }
// }

// export function activeCategory(categoryName) {
//   return {
//     type: 'ACTIVATE_CATEGORY',
//     payload: categoryName,
//   }
// }

// export default categoriesReducer;
export default categoriesSlice.reducer
