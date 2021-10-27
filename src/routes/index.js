import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// CUSTOM IMPORTS
import { ChakraProvider } from '@chakra-ui/react';
import { GlobalProvider } from '~/hooks/globalProvider';
import Home from '../pages/Home';
import Instructions from '../pages/TkcForm/instructions';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <ChakraProvider>
          <GlobalProvider>
            <Route path="/" exact component={Home} />
            <Route path="/instructions" exact component={Instructions} />
          </GlobalProvider>
        </ChakraProvider>
        {/* <Route path="/" component={() => <h1>404! PAGE NOT FOUND</h1>} /> */}
      </Switch>
    </BrowserRouter>
  );
}
