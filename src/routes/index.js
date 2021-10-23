import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


// CUSTOM IMPORTS
import Home from '../pages/Home';

export default function Routes() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/Home" exact component={Home} />
      <Route path="/" component={() => <h1>404! PAGE NOT FOUND</h1>} />
    </Switch>
    </BrowserRouter>
  );
}
