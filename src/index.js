import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Home from "./components/Home";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/ketan">
        <Header />
        <h1>KETAN GUPTA</h1>
      </Route>
      <Route path="/">
        <Header />
        <Home />
      </Route>
    </Switch>
  </Router>,
  document.getElementById("root")
);
