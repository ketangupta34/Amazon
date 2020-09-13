import React from "react";
import "../stylesheet/Home.css";

import Product1 from "../components/Product1"

import bg1 from '../assets/amazon_home_bg1.jpg'

export default function Home() {
  return (
    <div className="home">
      <div className="homeContainer">
				<img className="homeBackground" src={bg1} alt="home background" /> 
			</div>
      <div className="products"></div>
      <div className="productRow">
        <Product1 />
      </div>
    </div>
  );
}
