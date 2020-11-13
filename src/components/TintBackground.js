import React from "react";
import "../stylesheet/tint.css";

export default function TintBackground(props) {
  return (
    <div
      className={props.act ? "tintBackground active" : "tintBackground"}
      onClick={props.button}
    ></div>
  );
}
