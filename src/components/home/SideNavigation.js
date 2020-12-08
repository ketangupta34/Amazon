import React from "react";
import "../../stylesheet/home/SideNavigation.css";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import CloseIcon from "@material-ui/icons/Close";

import { useStateValue } from "../../StateProvider";

export default function SideNavigation(props) {
  const [{ user }] = useStateValue();

  document.querySelector("body").style.overflow = props.act ? "hidden" : "";

  return (
    <div className={props.act ? "sideNavigation active" : "sideNavigation"}>
      <div className="sideNavNameHead">
        <AccountCircleIcon style={{ color: "white" }} />

        <h6 className="sideNavUser">
          Hello, {user === null ? "sign In" : user.email}
        </h6>

        <CloseIcon
          style={{
            cursor: "pointer",
            color: "white",
            marginLeft: "auto",
          }}
          onClick={props.button}
        />
      </div>

      <div className="catagory"></div>
    </div>
  );
}
