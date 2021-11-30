import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// CUSTOM IMPORTS
import { ChakraProvider } from '@chakra-ui/react';
import { GlobalProvider } from '~/hooks/globalProvider';
import Home from '../pages/Home';
import Instructions from '../pages/TkcForm/instructions';
import Impulsores from '../pages/TkcForm/Implulsores';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <ChakraProvider>
          <GlobalProvider>
            <Route path="/" exact component={Home} />
            <Route path="/instrucoes" exact component={Instructions} />
            <Route path="/impulsores" exact component={Impulsores} />
          </GlobalProvider>
        </ChakraProvider>
        {/* <Route path="/" component={() => <h1>404! PAGE NOT FOUND</h1>} /> */}
      </Switch>
    </BrowserRouter>
  );
}
