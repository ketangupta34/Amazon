import React from "react";
import "../stylesheet/Product1.css";

function Product1() {
  return (
    <div className="product1">
      <div className="productInfo">
        <p>this is the description text</p>
        <p>Rs 1999</p>
        <div className="starRating">
          <p>🌟</p>
          <p>🌟</p>
          <p>🌟</p>
          <p>🌟</p>
          <p>🌟</p>
        </div>
      </div>
    </div>
  );
}

export default Product1;
