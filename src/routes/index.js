import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// CUSTOM IMPORTS
import { ChakraProvider } from '@chakra-ui/react';
import { GlobalProvider } from '~/hooks/globalProvider';
import Home from '../pages/Home';
import Instructions from '../pages/TkcForm/Instrucoes';
import Impulsores from '../pages/TkcForm/implulsores';
import Motivadores from '../pages/TkcForm/motivadores';
import Assertividade from '~/pages/TkcForm/pages/assertividade';
import TomadaDecisao from '~/pages/TkcForm/pages/analiseGerencial/pages/tomadaDecisao';
import Programacao from '~/pages/TkcForm/pages/analiseGerencial/pages/programacaoAtividades';
import Execucao from '~/pages/TkcForm/pages/analiseGerencial/pages/execucaoAtividades';
import Controle from '~/pages/TkcForm/pages/analiseGerencial/pages/controleAtividades';
import Organizacionais from '~/pages/TkcForm/pages/analiseGerencial/pages/mudancasOrganizacionais';

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
            <Route path="/analiseGerencial/1" exact component={TomadaDecisao} />
            <Route path="/analiseGerencial/2" exact component={Programacao} />
            <Route path="/analiseGerencial/3" exact component={Execucao} />
            <Route path="/analiseGerencial/4" exact component={Controle} />
            <Route
              path="/analiseGerencial/5"
              exact
              component={Organizacionais}
            />
          </GlobalProvider>
        </ChakraProvider>
        {/* <Route path="/" component={() => <h1>404! PAGE NOT FOUND</h1>} /> */}
      </Switch>
    </BrowserRouter>
  );
}
