import React from "react";
import t from "prop-types";
import classNames from "classnames";

import "./Text.scss";

const Text = ({ children, size }) => {
  let classes = classNames({
    "un-text": true,
    "is-size-1": size === "1",
    "is-size-2": size === "2",
    "is-size-3": size === "3"
  });
  return <div className={classes}>{children}</div>;
};

Text.propTypes = {
  size: t.oneOf(["1", "2", "3"])
};

Text.defaultProps = {
  size: "2"
};

export default Text;
