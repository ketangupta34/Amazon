import React from "react";
import "../stylesheet/SideNavigation.css";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import CloseIcon from "@material-ui/icons/Close";

export default function sideNavigation(props) {
  return (
    <div className="sideNavigation">
      <div className="sideNavNameHead">
        <AccountCircleIcon style={{ color: "white" }} />
        <strong>
          <p style={{ paddingLeft: "10px", color: "#ffffff" }}>Hello,sign in</p>
        </strong>
        <CloseIcon
          style={{
            color: "white",
            width: "80px",
            marginLeft: "auto",
            order: "2",
          }}
          onClick={props.button}
        />
      </div>

      <div className="catagory"></div>
    </div>
  );
}
