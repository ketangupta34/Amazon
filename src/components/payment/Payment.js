import React from "react";
import "../../stylesheet/payment/payment.css";

import CartItem from "../checkout/CartItem";

import { useStateValue } from "../../StateProvider";

function Payment() {
  const [{ basket, user }] = useStateValue();

  var items = basket.map((item, index) => (
    <CartItem
      id={index}
      title={item.title}
      price={item.price}
      image={item.image}
    />
  ));

  return (
    <div className="checkout">
      <h1>Check Out</h1>

      <div className="checkoutContent">
        <div className="contentDiv">
          <h5>Delivery Address: </h5>
          <div style={{ marginLeft: "10px" }}>
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
          <div className="cardDetails"></div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
