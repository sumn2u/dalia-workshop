import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Survey from '.././containers/Survey';
const  baseName =  process.env.REACT_APP_ENV === 'github' ? '/dalia-workshop' : '/';
const Router = () => (
  <BrowserRouter basename={baseName}>
    <Switch>
      <Route exact={true} path="/" component={Survey} />
      <Route exact={true} path="/surveys" component={Survey} />
      <Route exact={true} path="/surveys/:id" component={Survey} />
    </Switch>
  </BrowserRouter>
);

export default Router