import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { LandingPage, DashboardPage, MenuPage } from './pages';
import './App.scss';

function App() {
  return (
    <div className="page-wrapper">
      <Switch>
        <Route path="/" exact={true} component={LandingPage}></Route>
        <Route path="/dashboard" exact={true} component={DashboardPage}></Route>
        <Route path="/menu" exact={true} component={MenuPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
