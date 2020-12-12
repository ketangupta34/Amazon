import React, { useState, useEffect } from "react";
import "../../stylesheet/payment/payment.css";

import axios from "../../axios";
import CartItem from "../checkout/CartItem";
import { db } from "../../firebase";

import { useStateValue } from "../../StateProvider";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { useHistory } from "react-router-dom";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();

  var totalPrice = 0;
  basket.map((item) => {
    totalPrice += parseInt(item.price);
  });

  const stripe = useStripe();
  const elements = useElements();

  var items = basket.map((item, index) => (
    <CartItem
      id={item.id}
      title={item.title}
      price={item.price}
      image={item.image}
    />
  ));

  const [succeeded, setsucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisable] = useState(true);
  const [clientSecret, setCLientSecret] = useState(true);

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${totalPrice * 100}`,
      });
      setCLientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        console.log(basket);
        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            name: user.email,
            basket: { basket },
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setsucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          case: "EMPTY_BASKET",
        });

        history.replace("/orders");
      });
  };

  const handleChange = (e) => {
    setDisable(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
    <div className="checkout">
      <h1>Check Out</h1>

      <div className="checkoutContent">
        <div className="contentDiv">
          <h5>Delivery Address: </h5>
          <div className="address">
            <p>Name: {user?.email}</p>
            <p>1222, krishna nagar</p>
            <p>CIvil lines</p>
            <p>Ludhiana</p>
          </div>
        </div>
        <div className="contentDiv">
          <h5>Review Cart:</h5>
          <div className="cartItems">{items}</div>
        </div>
        <div className="contentDiv">
          <h5>card details:</h5>
          <div className="cardDetails">
            <form className="cardForm" onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />

              <div className="orderTotal">
                <CurrencyFormat
                  renderText={(value) => (
                    <p>
                      order total: <strong>{value}</strong>
                    </p>
                  )}
                  decimalScale={2}
                  value={totalPrice}
                  displayType={"text"}
                  prefix={"₹ "}
                />
                <button
                  type="submit"
                  disabled={processing || disabled || succeeded}
                >
                  <span>
                    {processing ? <p>processing...</p> : "Place order"}
                  </span>
                </button>
              </div>

              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
