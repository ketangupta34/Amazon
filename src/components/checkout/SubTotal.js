import React from "react";
import "../../stylesheet/checkout/subTotal.css";

import PurchaseProtectionImage from "../../assets/Purchase_Protection.png";

import CurrencyFormat from "react-currency-format";

function SubTotal() {
  return (
    <div className="subTotal">
      <img src={PurchaseProtectionImage} alt="purchase protection" />
      <CurrencyFormat
        renderText={(value) => (
          <div className="subTotalPrice">
            <p>
              Subtotal(0 Items): <strong>{value}</strong>
            </p>
            <small className="isAGift">
              <input type="checkbox" style={{ marginRight: "5px" }} />
              This order is a gift
            </small>
          </div>
        )}
        decimalScale={2}
        value={1000}
        displayType={"text"}
        prefix={"₹ "}
      />

      <button className="checkOutButton">Proceed to buy</button>
    </div>
  );
}
export default SubTotal;
