import React from "react";
import t from "prop-types";
import classNames from "classnames";

import "./Box.scss";

const Box = ({ children, space, squish, background, shadow, radius }) => {
  let classes = classNames({
    "un-box": true,
    "has-space-1": space === "1",
    "has-space-2": space === "2",
    "has-space-3": space === "3",
    "has-space-4": space === "4",
    "has-space-5": space === "5",
    "has-space-6": space === "6",
    "has-space-7": space === "7",
    "has-space-8": space === "8",
    "is-squish": squish === true,
    "is-background-white": background === "white",
    "is-background-light": background === "light",
    "is-background-dark": background === "dark",
    "is-background-black": background === "black",
    "is-background-brand": background === "brand",
    "has-radius-1": radius === "1",
    "has-radius-2": radius === "2",
    "has-radius-3": radius === "3",
    "has-radius-4": radius === "4",
    "has-shadow-1": shadow === "1",
    "has-shadow-2": shadow === "2",
    "has-shadow-3": shadow === "3",
    "has-shadow-4": shadow === "4",
  });
  return <div className={classes}>{children}</div>;
};

Box.propTypes = {
  space: t.oneOf(["1", "2", "3", "4", "5", "6", "7", "8"]),
  background: t.oneOf(["dark", "neutral", "neutralLight", "light", "default"]),
};

Box.defaultProps = {
  space: "3",
  background: "default",
};

export default Box;
