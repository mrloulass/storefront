import React from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core';

function Footer() {
  return (
    <Paper  elevation={3}>
      <Tab>
      <Tabs centered>
        <footer>&copy; 2021
          <p>Contact Information</p>
        </footer>
      </Tabs>
      </Tab>
    </Paper>
  );
}

export default Footer;

