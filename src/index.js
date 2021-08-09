import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App.js';
import { Container } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';

//======= import Provider from react-redux ================//
//======= import store from reduxStore/indexStore.js ======//
import { Provider } from 'react-redux';
import store from '../src/reduxStore/indexStore.js';

ReactDOM.render(
  <React.StrictMode>
    <Container>
      <Provider store={store}>
        <BrowserRouter>
        <App />
        </BrowserRouter>
      </Provider>
    </Container>
  </React.StrictMode>,
  document.getElementById('root')
);

