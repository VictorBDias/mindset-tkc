import React from 'react';
import { Switch } from 'react-router-dom';

// CUSTOM IMPORTS
import Route from './Route';
// PUBLIC URLS
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

export default function Routes() {
  return (
    <Switch>
      {/* PUBLIC ROUTES */}
      <Route path="/" exact component={SignIn} />
      <Route path="/signUp" exact component={SignUp} />

      <Route path="/" component={() => <h1>404! PAGE NOT FOUND</h1>} />
    </Switch>
  );
}
