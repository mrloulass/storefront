//========= build the products object initialState =======//
const initialState = {
  categories: [
    { displayName: 'Clothing', normalizedName: 'clothing', description: 'clothing from the pass' },
    { displayName: 'Toys', normalizedName: 'toys', description: 'toys from the pass' },
    { displayName: 'Video Games', normalizedName: 'video games', description: 'video games from the pass' },
  ],
  products: [
    { category: 'clothing',  name: 'Polo', description: 'Animal Logo Polo', price: 29,  inventoryCount: 50, image: 'https://i.pinimg.com/originals/e3/7c/d2/e37cd21df41602484e33b45ae9cfca48.jpg'},
    { category: 'toys',  name: 'Transformers', description: 'Autobot leader - Optimus Prime ', price: 39,  inventoryCount: 30, image:'https://s3.amazonaws.com/tf.images/reduced-image_17036_0_1588696407.png' },
    { category: 'toys',  name: 'Teenage Mutant Ninja Turtles', description: 'Donatello', price: 29,  inventoryCount: 40, image:'https://static.stacker.com/s3fs-public/styles/slide_desktop/s3/80sToys08NinjaturtlesO7U4.png'},
    { category: 'video games',  name: 'NES', description: 'Nintendo Entertainment System', price: 49,  inventoryCount: 20, image:'https://jpatrickhanley.files.wordpress.com/2019/05/jason-leung-770944-unsplash.jpg?w=1120' },
  ],
  activeCategory:'',
}


//=========== Reducer that will receive actions and update state =======//
function productsReducer(state = initialState, action){
  switch(action.type){
    case 'ACTIVATE':
      return {...state, activeCategory: action.payload}
      default:
        return state;
  }
}

export default productsReducer;
