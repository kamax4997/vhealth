import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { LandingPage } from "../modules/auth";

export function PublicRoutes() {
  return (
    <Switch>
      <Route path="/" component={LandingPage} />
      <Redirect to="/" />
    </Switch>
  );
}
