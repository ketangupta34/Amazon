import React from "react";
import "../stylesheet/tint.css";

export default function TintBackground(props) {
  // if (props.act) {
  //   console.log("open");
  //   document.querySelector(".tintBackgroundActive").style.display = "initial";
  // } else {
  //   window.setTimeout(() => {
  //     console.log("close");
  //     document.querySelector(".tintBackgroundClose").style.display = "none";
  //   }, 200);
  // }

  return (
    <div
      className={props.act ? "tintBackgroundActive" : "tintBackgroundClose"}
      onClick={props.button}
    ></div>
  );
}
