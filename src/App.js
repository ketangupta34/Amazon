import React from "react";

import Header from "./components/home/Header";
import Home from "./components/home/Home";
import CheckOut from "./components/checkout/CheckOut";
import Login from "./components/Login/Login";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <CheckOut />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
