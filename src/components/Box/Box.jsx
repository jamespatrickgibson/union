import React from "react";
import t from "prop-types";
import classNames from "classnames";

import "./Box.scss";

const Box = ({ children, space, squish, background }) => {
  let classes = classNames({
    "un-box": true,
    "is-space-xxs": space === "xxs",
    "is-space-xs": space === "xs",
    "is-space-s": space === "s",
    "is-space-m": space === "m",
    "is-space-l": space === "l",
    "is-space-xl": space === "xl",
    "is-space-xxl": space === "xxl",
    "is-squish": squish === true,
    "is-bg-dark": background === "dark",
    "is-bg-neutral": background === "neutral",
    "is-bg-neutral-light": background === "neutralLight"
  });
  return <div className={classes}>{children}</div>;
};

Box.propTypes = {
  space: t.oneOf(["xxs", "xs", "s", "m", "l", "xl", "xxl"]),
  background: t.oneOf(["dark", "neutral", "neutralLight", "default"])
};

Box.defaultProps = {
  space: "m",
  background: "default"
};

export default Box;
