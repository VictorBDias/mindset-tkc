import React, { createContext, useContext } from 'react';

//* CUSTOM IMPORTS
import Header from '../components/templates/Header';

const GlobalContext = createContext(null);

const GlobalProvider = ({ children }) => {
  //* STATES

  //* FUNCTIONS

  return (
    <GlobalContext.Provider value={{}}>
      <Header />
      {children}
    </GlobalContext.Provider>
  );
};

GlobalProvider.propTypes = {};

GlobalProvider.defaultProps = {};

const useGlobal = () => {
  const context = useContext(GlobalContext);

  if (!context) throw new Error('useGlobal must be used within GlobalProvider');

  return context;
};

export { GlobalProvider, useGlobal };
