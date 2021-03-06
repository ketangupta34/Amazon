import React, { useState } from "react";
import "../../stylesheet/home/header.css";
import "../../stylesheet/home/SideNavigation.css";

import amazon_logo from "../../assets/amazon_logo.png";

import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import MenuIcon from "@material-ui/icons/Menu";
import SideNavigation from "./SideNavigation";
import TintBackground from "./TintBackground";

import { Link } from "react-router-dom";

import { useStateValue } from "../../StateProvider";

import { auth } from "../../firebase";

export default function Header() {
  const [sideBar, setSideBar] = useState(false);
  const [{ basket, user }, dispatch] = useStateValue();

  const setBarState = () => {
    setSideBar(!sideBar);
  };

  const handleAuth = () => {
    if (user) {
      auth.signOut();
      dispatch({
        type: "SET_USER",
        user: null,
      });
      console.log("logged out");
    }
  };

  return (
    <div className="header">
      <div className="headerLogoDiv">
        <MenuIcon className="menuIcon" onClick={setBarState} />

        <SideNavigation act={sideBar} button={setBarState} />
        <TintBackground act={sideBar} button={setBarState} />

        <Link to="/">
          <img className="headerLogo" src={amazon_logo} alt="amazon logo" />
        </Link>
      </div>

      <div className="headerSearch">
        <button className="dropDown">
          All
          <ArrowDropDownIcon style={{ width: "20px" }} />
        </button>
        <input
          type="text"
          className="searchInput"
          placeholder="Search in store..."
        />
        <button className="searchIcon">
          <SearchIcon />
        </button>
      </div>

      <div className="headerNav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuth} className="navOption">
            <span className="navOptionLineOne">
              Hello, {user ? user.email : "Guest"}
            </span>
            <span className="navOptionLineTwo">
              {user ? "Sign Out" : "Sign In"}
              <ArrowDropDownIcon style={{ width: "20px" }} />
            </span>
          </div>
        </Link>

        <Link to="/orders">
          <div className="navOption">
            <span className="navOptionLineOne">Returns</span>
            <span className="navOptionLineTwo">
              & Orders
              <ArrowDropDownIcon style={{ width: "20px" }} />
            </span>
          </div>
        </Link>

        <div className="navOption">
          <span className="navOptionLineOne">Try</span>
          <span className="navOptionLineTwo">
            Prime
            <ArrowDropDownIcon style={{ width: "20px" }} />
          </span>
        </div>

        <Link to="/checkout">
          <div className="optionBasket">
            <ShoppingCartIcon className="basketIcon" />
            <span className="navOptionLineTwo basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
