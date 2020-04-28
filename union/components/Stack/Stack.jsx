import React from "react";
import t from "prop-types";
import classNames from "classnames";

import "./Stack.scss";

const Stack = ({ children, space }) => {
  let classes = classNames({
    "un-stack": true,
    "has-space-1": space === "1",
    "has-space-2": space === "2",
    "has-space-3": space === "3",
    "has-space-4": space === "4",
    "has-space-5": space === "5",
    "has-space-6": space === "6",
    "has-space-7": space === "7",
    "has-space-8": space === "8",
  });
  return <div className={classes}>{children}</div>;
};

Stack.propTypes = {
  space: t.oneOf(["1", "2", "3", "4", "5", "6", "7"]),
};

Stack.defaultProps = {
  space: "3",
};

export default Stack;
