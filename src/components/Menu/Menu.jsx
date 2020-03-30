import React from "react";
// import t from "prop-types";
import classNames from "classnames";

import "./Menu.scss";

const Menu = ({ children }) => {
  let classes = classNames({
    "un-menu": true
  });
  return <ul className={classes}>{children}</ul>;
};

// Menu.propTypes = {};
// Menu.defaultProps = {};

export default Menu;
