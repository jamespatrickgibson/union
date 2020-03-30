import React from "react";

import "@/Heading/Heading.scss";

const H1 = ({ children }) => (
  <h1 className="un-heading is-size-1">{children}</h1>
);
const H2 = ({ children }) => (
  <h2 className="un-heading is-size-2">{children}</h2>
);
const H3 = ({ children }) => (
  <h3 className="un-heading is-size-3">{children}</h3>
);
const H4 = ({ children }) => (
  <h4 className="un-heading is-size-4">{children}</h4>
);
const H5 = ({ children }) => (
  <h5 className="un-heading is-size-5">{children}</h5>
);
const H6 = ({ children }) => (
  <h6 className="un-heading is-size-6">{children}</h6>
);

export { H1, H2, H3, H4, H5, H6 };
