import React from "react";
import "../../stylesheet/home/Home.css";

import Product1 from "../../components/products/Product1";
import HomeCarausel from "../../components/home/HomeCarausel";

import oneplusImage from "../../assets/OnePlus-7.jpg";

export default function Home() {
  return (
    <div className="home">
      <div className="homeCarausel">
        <HomeCarausel />
      </div>

      <div className="products">
        <div className="productRow">
          <Product1
            title="This is new Text 1"
            price="1100"
            image={oneplusImage}
            rating={5}
          />
          <Product1
            title="This is new Text 2"
            price="1200"
            image={oneplusImage}
            rating={4}
          />
          <Product1
            title="This is new Text 3"
            price="300"
            image={oneplusImage}
            rating={3}
          />
          <Product1
            title="This is new Text 4"
            price="1400"
            image={oneplusImage}
            rating={2}
          />
        </div>
        <div className="productRow">
          <Product1 />
          <Product1 />
          <Product1 />
          {/* <Product1 /> */}
        </div>
        <div className="productRow">
          <Product1 />
          <Product1 />
          {/* <Product1 /> */}
          {/* <Product1 /> */}
        </div>
        <div className="productRow">
          <Product1 />
          <Product1 />
          <Product1 />
          {/* <Product1 /> */}
        </div>
        <div className="productRow">
          <Product1 />
          <Product1 />
          <Product1 />
          <Product1 />
        </div>
      </div>
    </div>
  );
}
