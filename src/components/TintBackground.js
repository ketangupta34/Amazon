import React from "react";

export default function TintBackground(props) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        zIndex: "9",
        backgroundColor: "black",
        opacity: "0.6",
        position: "fixed",
        top: "0",
        left: "0",
      }}
      onClick={props.button}
    ></div>
  );
}
