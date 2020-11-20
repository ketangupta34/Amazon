import React from "react";
import "../../stylesheet/products/Product1.css";

function Product1(props) {
  return (
    <div className="product1">
      <div className="productInfo">
        <p>{props.title}</p>
        <p>{props.price}</p>
        <div className="starRating">
          {Array(props.rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>
      <img src={props.image} alt="not aval"/>
      <button>Add to basket</button>
    </div>
  );
}

export default Product1;
