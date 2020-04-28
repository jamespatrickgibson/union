import React from "react";
import t from "prop-types";
import classNames from "classnames";

import "./Text.scss";

const Text = ({ children, size, align }) => {
  let classes = classNames({
    "un-text": true,
    "is-size-1": size === "1",
    "is-size-2": size === "2",
    "is-size-3": size === "3",
    "is-size-4": size === "4",
    "is-size-5": size === "5",
    "is-size-6": size === "6",
    "is-size-7": size === "7",
    "is-size-8": size === "8",
    "is-size-9": size === "9",
    "is-size-10": size === "10",
    "is-size-11": size === "11",
    "is-size-12": size === "12",
    "is-align-center": align === "center",
    "is-align-right": align === "right",
  });
  return <div className={classes}>{children}</div>;
};

Text.propTypes = {
  size: t.oneOf(["1", "2", "3"]),
  align: t.oneOf(["left", "center", "right"]),
};

Text.defaultProps = {
  size: "3",
  align: "left",
};

export default Text;
