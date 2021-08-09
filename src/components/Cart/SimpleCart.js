import { useSelector, useDispatch } from 'react-redux';

import { Card, Grid, Button, ButtonGroup } from '@material-ui/core'

import {removeFromCart} from '../../reduxStore/cartState.js'



function SimpleCart() {

  const cartItems = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const clickToRemove = (item) => {
    dispatch(removeFromCart(item));
  }

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="flex-end"
    >
      <Card  elevation={3}>
        <p>Items added to Cart:</p>
        <ButtonGroup
        orientation="vertical"
        color="default"
        variant="contained"
         >
          {cartItems.map(item => {
            return (
            <Button  key={item.name} onClick={()=> clickToRemove(item.name)}>{item.name}</Button>
            )
          })}
        </ButtonGroup>
        <p>Click Items to Remove from Cart</p>
      </Card>
    </Grid>
  )
}

export default SimpleCart;
