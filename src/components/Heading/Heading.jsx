import React from "react";
import t from "prop-types";
import classNames from "classnames";

import "./Heading.scss";

const Heading = ({ children, size }) => {
  let classes = classNames({
    "un-heading": true,
    "is-size-1": size === "1",
    "is-size-2": size === "2",
    "is-size-3": size === "3",
    "is-size-4": size === "4",
    "is-size-5": size === "5",
    "is-size-6": size === "6"
  });
  return <div className={classes}>{children}</div>;
};

Heading.propTypes = {
  size: t.oneOf(["1", "2", "3"])
};

Heading.defaultProps = {
  size: "3"
};

export default Heading;
