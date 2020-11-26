import React from "react";
import "../../stylesheet/products/Product1.css";
import { useStateValue } from "../../StateProvider";

function Product1(props) {
  const [{ basket }, dispatch] = useStateValue();

  console.log("basket = ", basket);

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: props.id,
        title: props.title,
        image: props.image,
        price: props.price,
        rating: props.rating,
      },
    });
  };

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
      <img src={props.image} alt="not aval" />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product1;
