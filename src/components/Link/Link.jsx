import React from "react";
import t from "prop-types";
import classNames from "classnames";

import "./Link.scss";

const Link = ({ children, to, monochrome }) => {
  let classes = classNames({
    "un-link": true,
    "is-monochrome": monochrome === true
  });
  return (
    <a className={classes} href={to}>
      {children}
    </a>
  );
};

Link.propTypes = {
  to: t.string,
  monochrome: t.bool
};

Link.defaultProps = {
  monochrome: false
};

export default Link;
