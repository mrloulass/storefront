const thunk = store => next => action => {
  typeof action === 'function'
    ? action(store.dispatch, store.getState)
    : next(action);
}

export default thunk;


// curried function
// you can install a thrid party to do this 
  // npm install redux-thunk
  // make sure async functions are curring (() => before your async function) this is only for redux
