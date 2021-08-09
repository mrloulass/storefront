import { createSlice } from "@reduxjs/toolkit";



//========= build the products object initialState =======//
// const initialState = {
//   list: [
//     { category: 'clothing', name: 'Polo', description: 'Animal Logo Polo', price: 29, inventoryCount: 50, image: 'https://i.pinimg.com/originals/e3/7c/d2/e37cd21df41602484e33b45ae9cfca48.jpg' },
//     { category: 'toys', name: 'Transformers', description: 'Autobot leader - Optimus Prime ', price: 39, inventoryCount: 30, image: 'https://s3.amazonaws.com/tf.images/reduced-image_17036_0_1588696407.png' },
//     { category: 'toys', name: 'Teenage Mutant Ninja Turtles', description: 'Donatello', price: 29, inventoryCount: 40, image: 'https://static.stacker.com/s3fs-public/styles/slide_desktop/s3/80sToys08NinjaturtlesO7U4.png' },
//     { category: 'video games', name: 'NES', description: 'Nintendo Entertainment System', price: 49, inventoryCount: 20, image: 'https://jpatrickhanley.files.wordpress.com/2019/05/jason-leung-770944-unsplash.jpg?w=1120' },
//   ]
// }

const productsSlice = createSlice({
  name: 'products',
  initialState: {list:[
    { category: 'clothing', name: 'Polo', description: 'Animal Logo Polo', price: 29, inventoryCount: 50, image: 'https://i.pinimg.com/originals/e3/7c/d2/e37cd21df41602484e33b45ae9cfca48.jpg' },
    { category: 'toys', name: 'Transformers', description: 'Autobot leader - Optimus Prime ', price: 39, inventoryCount: 30, image: 'https://s3.amazonaws.com/tf.images/reduced-image_17036_0_1588696407.png' },
    { category: 'toys', name: 'Teenage Mutant Ninja Turtles', description: 'Donatello', price: 29, inventoryCount: 40, image: 'https://static.stacker.com/s3fs-public/styles/slide_desktop/s3/80sToys08NinjaturtlesO7U4.png' },
    { category: 'video games', name: 'NES', description: 'Nintendo Entertainment System', price: 49, inventoryCount: 20, image: 'https://jpatrickhanley.files.wordpress.com/2019/05/jason-leung-770944-unsplash.jpg?w=1120' },
  ]},

  reducers: {
    activeCategory(state, action) {
      state.push({ name: action.payload })
    },

    addToCart(state, action) {
      return state.map(product => {
        if (product.name === action.payload.name) {
          product.inventoryCount = product.inventoryCount - 1;
        }
        return product;
      })
    },

    removeFromCart(state, action) {
      return state.filter(product => product.name !== action.payload)
    },
  }
})

export const {activeCategory, addToCart, removeFromCart} = productsSlice.actions
//=========== Reducer that will receive actions and update state =======//
// function productsReducer(state = initialState, action) {
//   switch (action.type) {
//     case 'ACTIVATE_CATEGORY':
//       return { ...state, activeCategory: action.payload }
//     default:
//       return state;
//   }
// }

// export function productsAddReducer(state = initialState, action) {
//   switch (action.type) {
//     case 'ADD_TO_CART':
//       return state.map(product => {
//         if (product.name === action.payload.name) {
//           product.inventoryCount = product.inventoryCount - 1;
//         }
//         return product;
//       });
//     default:
//       return state;
//   }
// }

// export function productsRemoveReducer(state = initialState, action) {
//   switch (action.type) {
//     case 'REMOVE_FROM_CART':
//       return state.map(product => {
//         if (product.name === action.payload.name) {
//           product.inventoryCount = (product.inventoryCount + 1) && (product.name = product.name - 1);
//         }
//         return product;
//       });
//     default:
//       return state;
//   }
// }


export default productsSlice.reducer;
