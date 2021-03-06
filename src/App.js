import React from 'react';
import 'dotenv/config';
import { Router } from 'react-router-dom';

// CUSTOM IMPORTS
import './config/ReactotronConfig';
import { Toaster } from 'react-hot-toast';
import Routes from './routes';
import history from './services/history';
import GlobalStyle from './styles/global';

function App() {
  return (
    <Router history={history}>
      <Toaster />
      <Routes />
      <GlobalStyle />
    </Router>
  );
}

export default App;
