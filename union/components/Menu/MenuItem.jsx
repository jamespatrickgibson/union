import React from "react";
// import t from "prop-types";
import classNames from "classnames";

import "./Menu.scss";

const MenuItem = ({ children }) => {
  let classes = classNames({
    "un-menu__item": true
  });
  return <li className={classes}>{children}</li>;
};

// MenuItem.propTypes = {};
// MenuItem.defaultProps = {};

export default MenuItem;
