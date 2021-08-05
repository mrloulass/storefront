import React from 'react';

import { AppBar, Toolbar, Typography, IconButton, Grid } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';


function Header() {


  return (
    <AppBar color="inherit" position="static">
      <Toolbar elevation={3}>
        <IconButton>
          <MenuIcon />
        </IconButton>
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
