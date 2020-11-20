import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/home/Header";
import Home from "./components/home/Home";
import CheckOut from "./components/checkout/CheckOut";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Header />

    <Switch>
      <Route path="/checkout">
        <CheckOut />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>,
  document.getElementById("root")
);
