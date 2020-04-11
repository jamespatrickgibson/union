import React from "react";
import t from "prop-types";
import classNames from "classnames";

import "./Menu.scss";

const MenuSection = ({ children, title }) => {
  let classes = classNames({
    "un-menu__section": true
  });
  return (
    <div className={classes}>
      {title && <p className="un-menu__section-title">{title}</p>}
      {children}
    </div>
  );
};

MenuSection.propTypes = {
  title: t.string
};
// Menu.defaultProps = {};

export default MenuSection;
