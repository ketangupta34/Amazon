import React, { useEffect } from "react";

import Header from "./components/home/Header";
import Home from "./components/home/Home";
import CheckOut from "./components/checkout/CheckOut";
import Login from "./components/Login/Login";
import Payment from "./components/payment/Payment";

import { auth } from "./firebase";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("user is >>> ", authUser.email);

      if (authUser) {
        //User logged In
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //not loggedin
        dispatch({
          type: "set_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/payment">
            <Header />
            <Payment />
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
