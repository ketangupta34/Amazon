import React from "react";

import "../../stylesheet/checkout/cartItem.css";

import oneplusImage from "../../assets/OnePlus-7.jpg";

function CartItem() {
  return (
    <div className="cartItem">
      <img src={oneplusImage} alt="image" className="cartItemImage" />
      <span>lol</span>
    </div>
  );
}

export default CartItem;
