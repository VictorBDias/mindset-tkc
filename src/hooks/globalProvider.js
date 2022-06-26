import React, { createContext, useContext, useEffect, useState } from 'react';

//* CUSTOM IMPORTS
import Header from '../components/templates/Header';
import Footer from '../components/templates/Footer';

const GlobalContext = createContext(null);

// eslint-disable-next-line react/prop-types
const GlobalProvider = ({ children }) => {
  //* STATES
  const [userId, setUserId] = useState();

  useEffect(() => {
    const persistedUserId = localStorage.getItem('userId');
    if (!userId) setUserId(persistedUserId);
  }, [userId]);

  //* FUNCTIONS

  return (
    <GlobalContext.Provider value={{ userId, setUserId }}>
      <Header />
      {children}
      <Footer />
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
