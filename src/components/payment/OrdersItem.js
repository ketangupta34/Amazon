import React from "react";
import "../../stylesheet/payment/ordersItem.css";

import oneplusImage from "../../assets/OnePlus-7.jpg";

function OrdersItem() {
  return (
    <div className="orderItem">
      <div className="orderHeader">
        <div className="innerDiv">
          <div className="orderHeaderContent">
            <p className="contentLineOne">ORDER PLACED</p>
            <p className="contentLineTwo">friday 5, 2020</p>
          </div>
          <div className="orderHeaderContent">
            <p className="contentLineOne">TOTAL</p>
            <p className="contentLineTwo">&450000</p>
          </div>
        </div>
        <div className="orderHeaderContent">
          <p className="contentLineOne">ORDER NO</p>
          <p className="contentLineTwo">eofibnt4hn392n30g</p>
        </div>
      </div>

      <div className="orderContent">
        <div className="innerDiv">
          <div className="imageDiv">
            <img src={oneplusImage} alt="item image" className="itemImage" />
          </div>
          <div className="orderDetails">
            <p className="itemName">this is oneplus phone 7 ordered</p>
            <p className="soldBy">Sold by Amazon.in</p>
            <p className="returnNA">Return not available</p>
          </div>
        </div>
        <div className="buttons">
          <button className="button">Buy Again</button>
          <button className="button">Write product review</button>
        </div>
      </div>
    </div>
  );
}

export default OrdersItem;
