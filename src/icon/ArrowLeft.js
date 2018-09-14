import React from "react";

const SVG = ({
  style = {},
  fill = "#000",
  width = "100%",
  className = "",
  viewBox = "0 0 46 44"
}) => (
  <svg
    width={width}
    style={style}
    height={width}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
  <path d="M0 22.038c0 .7.3 1.5.8 2.1l18 19c1.1 1.2 3.1 1.2 4.3.1 1.2-1.1 1.3-3.1.1-4.2l-13.2-14h33c1.7 0 3-1.3 3-3s-1.3-3-3-3H10l13.2-13.9c1.2-1.1 1.1-3.1-.1-4.2-1.2-1.1-3.2-1.1-4.3.1l-18 19c-.5.5-.8 1.2-.8 2z"/>
  </svg>
);

export default SVG;
