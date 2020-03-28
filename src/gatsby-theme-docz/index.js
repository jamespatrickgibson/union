// src/gatsby-theme-docz/index.js
import React from "react";
import { theme, ComponentsProvider } from "docz";

// Union Components
import { Text } from "@/Text/Text";

import { Menu } from "./Menu";
import { Heading } from "@/Heading/Heading";

const map = {
  h1: Heading,
  p: Text
};

const Theme = ({ children }) => (
  <div>
    <Menu />
    <ComponentsProvider components={map}>{children}</ComponentsProvider>
  </div>
);

export default theme()(Theme);
