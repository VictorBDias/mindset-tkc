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
import GestaoTempo from '~/pages/TkcForm/pages/gestaoTempo';
import Intensidade from '~/pages/TkcForm/pages/intensidade';
import Conexao from '~/pages/TkcForm/pages/conexao';
import Autorresponsabilidade from '~/pages/TkcForm/pages/autorrresponsabilidade';
import Direcional from '~/pages/TkcForm/pages/direcional';

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
            <Route path="/gestaoTempo" exact component={GestaoTempo} />
            <Route path="/intensidade" exact component={Intensidade} />
            <Route path="/conexao" exact component={Conexao} />
            <Route
              path="/autorresponsabilidade"
              exact
              component={Autorresponsabilidade}
            />
            <Route path="/direcional" exact component={Direcional} />
          </GlobalProvider>
        </ChakraProvider>
      </Switch>
    </BrowserRouter>
  );
}
