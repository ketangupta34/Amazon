import React from "react";
import "../stylesheet/Home.css";

import Product1 from "../components/Product1";
import HomeCarausel from "../components/HomeCarausel";

import bg1 from "../assets/amazon_home_bg1.jpg";

export default function Home() {
  return (
    <div className="home">
      <div className="homeContainer">
        <HomeCarausel />
      </div>
      <div className="products">
        <div className="productRow">{/* <Product1 /> */}</div>
      </div>
    </div>
  );
}
