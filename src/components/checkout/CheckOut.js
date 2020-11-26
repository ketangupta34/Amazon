import React from "react";
import "../../stylesheet/checkout/CheckOut.css";

import CartItem from "../checkout/CartItem";
import SubTotal from "../checkout/SubTotal";

function CheckOut() {
  return (
    <div className="checkOut">
      <div className="cartItems">
        <h1>
          <strong>Your shopping list</strong>
        </h1>
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <div>
        <SubTotal />
      </div>
    </div>
  );
}

export default CheckOut;
