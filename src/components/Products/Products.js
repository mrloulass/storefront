//====== import hooks from react-redux for the components to read state ======//
import { useSelector, useDispatch } from 'react-redux';

import { Grid, Card, CardMedia, CardContent, Typography, Button } from '@material-ui/core';
import { addToCart } from '../../reduxStore/cartState.js'

import { useEffect } from 'react'
import { getProducts } from '../../reduxStore/liveAPIState.js';

function ProductsList() {

  //====== add hooks to function
  const products = useSelector(state => state.products.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const setProduct = (product) => {
    dispatch({
      type: 'ACTIVATE_CATEGORY',
      payload: product,
    });
  }

  const itemClick = (item) => {
    dispatch(addToCart(item));
  }

  return (

    <Grid
      container
      direction="row"
      justifyContent="space-evenly"
      alignItems="center"
    >
      {products.map(items => {
        return (
          <Card key={items.name} elevation={3}>
            <CardMedia image={items.image}
              height="100"
              component="img"
            />
            <CardContent onClick={() => setProduct(items.category)}>
              <Typography component="h2"> {items.name} </Typography>
              <Typography component="h2"> Description: {items.description} </Typography>
              <Typography component="h2"> Price: {items.price} </Typography>
              <Typography component="h2"> Inventory: {items.inventoryCount} </Typography>
            </CardContent>
            <Button onClick={() => itemClick(items.name)}>Add to Cart</Button>
          </Card>

        )
      })}
    </Grid>
  )

}

export default ProductsList;
