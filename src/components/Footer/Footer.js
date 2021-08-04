import React from 'react';
import { Paper, Tabs } from '@material-ui/core';

function Footer() {
  return (
    <Paper  elevation={3}>
      <Tabs centered>
        <footer>&copy; 2021
          <p>Contact Information</p>
        </footer>
      </Tabs>
    </Paper>
  );
}

export default Footer;

