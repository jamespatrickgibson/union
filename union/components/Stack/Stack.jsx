import React from "react";
import t from "prop-types";
import classNames from "classnames";

import "./Stack.scss";

const Stack = ({ children, space }) => {
  let classes = classNames({
    "un-stack": true,
    "is-space-xxs": space === "xxs",
    "is-space-xs": space === "xs",
    "is-space-s": space === "s",
    "is-space-m": space === "m",
    "is-space-l": space === "l",
    "is-space-xl": space === "xl",
    "is-space-xxl": space === "xxl"
  });
  return <div className={classes}>{children}</div>;
};

Stack.propTypes = {
  space: t.oneOf(["xxs", "xs", "s", "m", "l", "xl", "xxl"])
};

Stack.defaultProps = {
  space: "m"
};

export default Stack;
