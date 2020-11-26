import React from "react";
import "../../stylesheet/checkout/subTotal.css";

import CurrencyFormat from "react-currency-format";

function SubTotal() {
  return (
    <div className="subTotal">
      <CurrencyFormat
        renderText={(value) => (
          <div>
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
        prefix={"Rs."}
      />

      <button className="checkOutButton">Proceed to buy</button>
    </div>
  );
}
export default SubTotal;
