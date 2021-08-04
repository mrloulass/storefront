//====== import hooks from react-redux for the components to read state ======//
import { useSelector, useDispatch } from 'react-redux';

import { Grid, Card, CardMedia, CardContent, Typography } from '@material-ui/core';


function ProductsList() {

  //====== add hooks to function
  const products = useSelector(state => state.store.products);
  const dispatch = useDispatch();

  const setProduct = (product) => {
    dispatch({
      type: 'ACTIVATE',
      payload: product,
    });
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
          <Card elevation={3}>
            <CardMedia image={items.image}
            height="140"
            component="img"
            />
            <CardContent onClick={() => setProduct(items.category)}>
              <Typography component="h2"> {items.name} </Typography>
              <Typography component="h2"> Description: {items.description} </Typography>
              <Typography component="h2"> Price: {items.price} </Typography>
              <Typography component="h2"> Inventory: {items.inventoryCount} </Typography>
            </CardContent>
          </Card>
        )
      })}
    </Grid>
  )

}

export default ProductsList;
