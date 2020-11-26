import React from "react";

import Header from "./components/home/Header";
import Home from "./components/home/Home";
import CheckOut from "./components/checkout/CheckOut";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div style={{ backgroundColor: "#ebebeb" }}>
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
      </Router>
    </div>
  );
}

export default App;
