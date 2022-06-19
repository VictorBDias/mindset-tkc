import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// CUSTOM IMPORTS
import { ChakraProvider } from '@chakra-ui/react';
import { GlobalProvider } from '~/hooks/globalProvider';
import Home from '../pages/Home';
import Instructions from '../pages/TkcForm/pages/instrucoes';
import Impulsores from '../pages/TkcForm/pages/implulsores';
import Motivadores from '../pages/TkcForm/pages/motivadores';
import Assertividade from '~/pages/TkcForm/pages/assertividade';
import AnaliseGerencial from '~/pages/TkcForm/pages/analiseGerencial';
import PredominanciaCerebral from '~/pages/TkcForm/pages/predominanciaCerebral';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <ChakraProvider>
          <GlobalProvider>
            <Route path="/" exact component={Home} />
            <Route path="/instrucoes" exact component={Instructions} />
            <Route path="/impulsores" exact component={Impulsores} />
            <Route path="/motivadores" exact component={Motivadores} />
            <Route path="/assertividade" exact component={Assertividade} />
            <Route
              path="/analiseGerencial"
              exact
              component={AnaliseGerencial}
            />
            <Route
              path="/predominanciaCerebral"
              exact
              component={PredominanciaCerebral}
            />
          </GlobalProvider>
        </ChakraProvider>
        {/* <Route path="/" component={() => <h1>404! PAGE NOT FOUND</h1>} /> */}
      </Switch>
    </BrowserRouter>
  );
}
