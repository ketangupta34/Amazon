import React from "react";
import "../../stylesheet/home/Home.css";

import Product1 from "../../components/products/Product1";
import HomeCarausel from "../../components/home/HomeCarausel";

import oneplusblueImage from "../../assets/onePlus8t.jpg";
import oneplusImage from "../../assets/OnePlus-7.jpg";
import oneplusredImage from "../../assets/oneplus8tred.jpg";
import samsungImage from "../../assets/samsung10plus.jpg";
import iphone12Image from "../../assets/iphone12.jpg";

export default function Home() {
  return (
    <div className="home">
      <div className="homeCarausel">
        <HomeCarausel />
      </div>

      <div className="products">
        <div className="productRow">
          <Product1
            title="OnePlus 8T 5G (Aquamarine Green, 12GB RAM, 256GB Storage)"
            price="46000"
            image={oneplusblueImage}
            rating={5}
          />
          <Product1
            title="OnePlus 8T 5G (Lunar Silver 12GB RAM, 256GB Storage)"
            price="45000"
            image={oneplusredImage}
            rating={4}
          />
          <Product1
            title="New Apple iPhone 12 (64GB) - Blue"
            price="80000"
            image={iphone12Image}
            rating={1}
          />
          <Product1
            title="Samsung Galaxy S10 Plus (Prism Black, 8GB RAM, 128GB Storage)"
            price="40000"
            image={samsungImage}
            rating={3}
          />
        </div>
        <div className="productRow">
          <Product1
            title="New Apple iPhone 12 (64GB) - Blue"
            price="80000"
            image={iphone12Image}
            rating={2}
          />
          <Product1
            title="Samsung Galaxy S10 Plus (Prism Black, 8GB RAM, 128GB Storage)"
            price="40000"
            image={samsungImage}
            rating={3}
          />
          <Product1
            title="OnePlus 7 (grey, 8GB RAM, 256GB Storage)"
            price="30000"
            image={oneplusImage}
            rating={5}
          />
        </div>
        <div className="productRow">
          <Product1
            title="Samsung Galaxy S10 Plus (Prism Black, 8GB RAM, 128GB Storage)"
            price="40000"
            image={samsungImage}
            rating={2}
          />
          <Product1
            title="OnePlus 8T 5G (Lunar Silver 12GB RAM, 256GB Storage)"
            price="45000"
            image={oneplusredImage}
            rating={4}
          />
        </div>
        <div className="productRow">
          <Product1
            title="Samsung Galaxy S10 Plus (Prism Black, 8GB RAM, 128GB Storage)"
            price="40000"
            image={samsungImage}
            rating={2}
          />
          <Product1
            title="OnePlus 8T 5G (Aquamarine Green, 12GB RAM, 256GB Storage)"
            price="46000"
            image={oneplusblueImage}
            rating={5}
          />
          <Product1
            title="OnePlus 8T 5G (Lunar Silver 12GB RAM, 256GB Storage)"
            price="45000"
            image={oneplusredImage}
            rating={4}
          />
        </div>
        <div className="productRow">
          <Product1
            title="OnePlus 8T 5G (Lunar Silver 12GB RAM, 256GB Storage)"
            price="45000"
            image={oneplusredImage}
            rating={4}
          />
          <Product1
            title="OnePlus 8T 5G (Aquamarine Green, 12GB RAM, 256GB Storage)"
            price="46000"
            image={oneplusblueImage}
            rating={5}
          />
          <Product1
            title="Samsung Galaxy S10 Plus (Prism Black, 8GB RAM, 128GB Storage)"
            price="40000"
            image={samsungImage}
            rating={2}
          />
          <Product1
            title="Samsung Galaxy S10 Plus (Prism Black, 8GB RAM, 128GB Storage)"
            price="40000"
            image={samsungImage}
            rating={2}
          />
        </div>
      </div>
    </div>
  );
}
