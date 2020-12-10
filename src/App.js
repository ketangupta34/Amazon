import React, { useEffect } from "react";

import Header from "./components/home/Header";
import Home from "./components/home/Home";
import CheckOut from "./components/checkout/CheckOut";
import Login from "./components/Login/Login";
import Payment from "./components/payment/Payment";
import Orders from "./components/payment/Orders";

import { auth } from "./firebase";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from "./StateProvider";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51HwXwNJfI07XRe3XAPMJkZMQMGSvvRmX7wkkEK6V3g2haT2lnqU3Y85lsI1OjGMZQx9E6CQcir5JJBmnHeckF80K00Y0hGHOmz"
);

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
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/orders">
            <Orders />
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
