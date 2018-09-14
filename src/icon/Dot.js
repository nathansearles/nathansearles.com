import React from "react";

const SVG = ({
  style = {},
  fill = "#000",
  width = "100%",
  className = "",
  viewBox = "0 0 56 56"
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
    <circle cx="28" cy="28" r="28"/>
  </svg>
);

export default SVG;
