import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Detail from "../pages/Detail";

function routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
        <Route path="/detail/:id" component={Detail} />
      </Switch>
    </BrowserRouter>
  );
}

export default routes;
