import React from "react";
import "../../stylesheet/checkout/CheckOut.css";

import CartItem from "../checkout/CartItem";
import SubTotal from "../checkout/SubTotal";

import { useStateValue } from "../../StateProvider";

function CheckOut() {
  const [{ basket }] = useStateValue();

  var items = basket.map((item, index) => (
    <CartItem id={index} title={item.title} price={item.price} />
  ));

  return (
    <div className="checkOut">
      <div className="cartItems">
        <h1>
          <strong>Your shopping list</strong>
        </h1>

        {items}
      </div>
      <div>
        <SubTotal />
      </div>
    </div>
  );
}

export default CheckOut;
