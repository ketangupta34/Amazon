import React from "react";
import "../stylesheet/Product1.css";

function Product1(props) {
  return (
    <div className="product1">
      <div className="productInfo">
        <p>{props.title}</p>
        <p>{props.price}</p>
        <div className="starRating">
          {console.log(props.rating)}
          {Array(props.rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>
      <img src={props.image} />
      <button>Add to basket</button>
    </div>
  );
}

export default Product1;
