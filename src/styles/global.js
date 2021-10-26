import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import 'react-perfect-scrollbar/dist/css/styles.css';

// CUSTOM IMPORTS

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:100,400,700&display=swap');

  /* RESET ALL DEFAULT CSS STYLE */
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
    background: none;
    background-size: cover;
    background-color: #F1F1F1;

  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`;
