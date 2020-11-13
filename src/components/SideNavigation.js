import React from "react";
import "../stylesheet/SideNavigation.css";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import CloseIcon from "@material-ui/icons/Close";

export default function sideNavigation(props) {
  document.querySelector("body").style.overflow = props.act?"hidden":"";

  return (
    <div className={props.act?"sideNavigation active":"sideNavigation"}>
      <div className="sideNavNameHead">
        <AccountCircleIcon style={{ color: "white" }} />
        <strong>
          <p style={{ margin:0, padding: "0 10px", color: "#ffffff" }}>Hello,sign in</p>
        </strong>
        <CloseIcon
          style={{
            color: "white",
            marginLeft: "auto"
          }}
          onClick={props.button}
        />
      </div>

      <div className="catagory"></div>
    </div>
  );
}
