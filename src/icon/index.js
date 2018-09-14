import React from "react";

import ArrowLeft from "./ArrowLeft";
import Dot from "./Dot";

const Icon = props => {
  switch (props.name) {
    case "ArrowLeft":
      return <ArrowLeft {...props} />;
    case "dot":
      return <Dot {...props} />;
    default:
      return;
  }
};

export default Icon;
