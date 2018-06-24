import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import LoginPage from "../components/LoginPage";
import HomePage from "../components/HomePage";
export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/" exact={true} component={LoginPage} />
        <Route path="/home" component={HomePage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
