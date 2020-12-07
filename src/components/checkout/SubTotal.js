import React from "react";
import "../../stylesheet/checkout/subTotal.css";

import PurchaseProtectionImage from "../../assets/Purchase_Protection.png";

import CurrencyFormat from "react-currency-format";

import { useStateValue } from "../../StateProvider";

function SubTotal() {
  const [{ basket }] = useStateValue();

  var totalPrice = 0;
  basket.map((item) => {
    totalPrice += parseInt(item.price);
  });

  console.log("totalPrice = ",totalPrice);

  return (
    <div className="subTotal">
      <img src={PurchaseProtectionImage} alt="purchase protection" />
      <CurrencyFormat
        renderText={(value) => (
          <div className="subTotalPrice">
            <p>
              Subtotal({basket.length} Items): <strong>{value}</strong>
            </p>
            <small className="isAGift">
              <input type="checkbox" style={{ marginRight: "5px" }} />
              This order is a gift
            </small>
          </div>
        )}
        decimalScale={2}
        value={totalPrice}
        displayType={"text"}
        prefix={"₹ "}
      />

      <button className="checkOutButton">Proceed to buy</button>
    </div>
  );
}
export default SubTotal;
