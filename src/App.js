import React from 'react';
import 'dotenv/config';
import { ToastContainer } from 'react-toastify';
import { Router } from 'react-router-dom';

// CUSTOM IMPORTS
import './config/ReactotronConfig';
import Routes from './routes';
import history from './services/history';
import GlobalStyle from './styles/global';

function App() {
  return (
    <Router history={history}>
      <Routes />
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
    </Router>
  );
}

export default App;
