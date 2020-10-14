import React from "react";
import "../stylesheet/Home.css";

import Product1 from "../components/Product1";
import HomeCarausel from "../components/HomeCarausel";

export default function Home() {
  return (
    <div className="home">
      <div className="homeCarausel">
        <HomeCarausel />
      </div>
      <div className="products">
        <div className="productRow">
          <Product1 />
          <Product1 />
          <Product1 />
        </div>
        <div className="productRow">
          <Product1 />
          <Product1 />
          <Product1 />
        </div>
        <div className="productRow">
          <Product1 />
          <Product1 />
          <Product1 />
        </div>
        <div className="productRow">
          <Product1 />
          <Product1 />
          <Product1 />
        </div>
        <div className="productRow">
          <Product1 />
          <Product1 />
          <Product1 />
        </div>
      </div>
    </div>
  );
}
