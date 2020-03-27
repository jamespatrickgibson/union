import React from "react";
import t from "prop-types";

import "./Text.scss";

export const Text = ({ children, kind, ...rest }) => (
  <div className="Text" {...rest}>
    {children}
  </div>
);

Text.propTypes = {
  kind: t.oneOf(["info", "positive", "negative", "warning"])
};

Text.defaultProps = {
  kind: "info"
};
