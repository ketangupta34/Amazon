import React from "react";
import "../stylesheet/header.css";

import amazon_logo from "../assets/amazon_logo.png";

import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import MenuIcon from '@material-ui/icons/Menu';

export default function Header() {
  return (
    <div className="header">

      <MenuIcon className="menuIcon" />

      <img className="headerLogo" src={amazon_logo} alt="amazon logo" />

      <div className="headerSearch">
        <input type="text" className="searchInput" placeholder="Search in store..." />
        <SearchIcon className="searchIcon" />
      </div>

      <div className="headerNav">
        <div className="navOption">
          <span className="navOptionLineOne">hello,sign in</span>
          <span className="navOptionLineTwo">Accounts & lists</span>
        </div>
        <div className="navOption">
          <span className="navOptionLineOne">returns</span>
          <span className="navOptionLineTwo">& orders</span>
        </div>
        <div className="navOption">
          <span className="navOptionLineOne">Try</span>
          <span className="navOptionLineTwo">prime</span>
        </div>
      </div>

      <div className="optionBasket">
        <ShoppingBasketIcon className="basketIcon" />
        <span className="navOptionLineTwo basketCount">0</span>
      </div>
    </div>
  );
}
