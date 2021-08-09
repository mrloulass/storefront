import React from 'react';

import { AppBar, Toolbar, Typography, IconButton, Grid, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link, Route } from 'react-router-dom';
import CategoryList from '../Categories/Categories.js';

function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar color="inherit" position="static">
      <Toolbar elevation={3}>
        <IconButton >
          <MenuIcon onClick={handleClick} />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem>
            <Link to="/products">Product Details</Link>
            {/* <Route path="/products" component={ProductDetails}/> */}
          </MenuItem>
          <MenuItem>
            <Link to="/cart">Shopping Cart</Link>
            {/* <Route path="/cart" component={ShoppingCart}/> */}
          </MenuItem>
          <MenuItem>
            <Link to="/categories">Categories</Link>
            <Route path="/categories" component={CategoryList}/>
          </MenuItem>
        </Menu>
        <Typography variant="h6" >
          The Nostalgia Store
        </Typography>
      </Toolbar>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="flex-end"
      >
        <Typography variant="h6" color="inherit">Cart {0}</Typography>
      </Grid>
    </AppBar>


  );
}

export default Header;
