import React from "react";

import "../../stylesheet/checkout/cartItem.css";

import oneplusImage from "../../assets/OnePlus-7.jpg";
import amzFullfilled from "../../assets/A_Fullfilled.png";

import { useStateValue } from "../../StateProvider";

function CartItem(props) {
  const [{ basket }, dispatch] = useStateValue();

  const deleteItem = () => {
    console.log("in Here");
    dispatch({
      type: "DELETE_FROM_BASKET",
      id: props.id
    });
  }

  return (
    <div className="cartItem">
      <input type="checkbox" className="checkbox" />
      <img src={oneplusImage} alt="image" className="cartItemImage" />

      <div className="info">
        <div className="namePriceInfo">
          <p className="cartItemTitle">
            <strong>{props.title}</strong>
          </p>
          <p className="cartItemPrice">{props.price}</p>
        </div>

        <div className="faltuInfo">
          <p>In stock</p>
          <p>Eligible for FREE shipping</p>
          <img src={amzFullfilled} alt="amazon full filled" />
        </div>

        <div className="buttonInfo">
          <button className="cartDeleteButton" onClick={deleteItem}>Delete item</button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
