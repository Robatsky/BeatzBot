import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { LandingPage, DashboardPage, MenuPage } from './pages';

import {UserProvider} from './context/UserContext';

import {Navigation} from './molecules';
import './App.scss';

function App( { history }) {

  return (
    <UserProvider>
      <Navigation />
      <div className="page-wrapper">
          <Switch>
            <Route path="/" exact={true} component={LandingPage} />
            <Route  path="/dashboard" exact={true} component={DashboardPage} />
            <Route path="/menu" exact={true} component={MenuPage} />
          </Switch>
      </div>
    </UserProvider>
  );
}

export default App;
