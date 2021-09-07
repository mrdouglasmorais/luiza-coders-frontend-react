import React from "react";

import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";

const Routes = () => (
  <Switch>
    <Route path='/' exact component={Home} />
    <Route path='/cart' component={Cart} />
    <Route path='*/*' component={NotFound} />
  </Switch>
);

export default Routes;
