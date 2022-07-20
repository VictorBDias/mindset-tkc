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
import Autorresponsabilidade from '~/pages/TkcForm/pages/autorresponsabilidade';
import Direcional from '~/pages/TkcForm/pages/direcional';
import { GenerateTokenPage } from '~/pages/admin/GenerateToken';
import { ChartJs } from '~/pages/ChartJs';

export default function Routes() {
  const localStorageToken = localStorage.getItem('token');
  return (
    <BrowserRouter>
      <Switch>
        <ChakraProvider>
          <GlobalProvider>
            <Route path="/" exact component={Home} />
            {localStorageToken && (
              <>
                <Route path="/instrucoes" exact component={Instructions} />
                <Route
                  path="/impulsores/:userId"
                  exact
                  component={Impulsores}
                />
                <Route
                  path="/motivadores/:userId"
                  exact
                  component={Motivadores}
                />
                <Route
                  path="/assertividade/:userId"
                  exact
                  component={Assertividade}
                />
                <Route
                  path="/analiseGerencial/:userId"
                  exact
                  component={AnaliseGerencial}
                />
                <Route
                  path="/predominanciaCerebral/:userId"
                  exact
                  component={PredominanciaCerebral}
                />
                <Route
                  path="/gestaoTempo/:userId"
                  exact
                  component={GestaoTempo}
                />
                <Route
                  path="/intensidade/:userId"
                  exact
                  component={Intensidade}
                />
                <Route path="/conexao/:userId" exact component={Conexao} />
                <Route
                  path="/autorresponsabilidade/:userId"
                  exact
                  component={Autorresponsabilidade}
                />
                <Route
                  path="/direcional/:userId"
                  exact
                  component={Direcional}
                />
              </>
            )}
            <Route
              path="/admin/token/generate"
              exact
              component={GenerateTokenPage}
            />
            <Route path="/feedback/:userId" exact component={ChartJs} />
          </GlobalProvider>
        </ChakraProvider>
      </Switch>
    </BrowserRouter>
  );
}
