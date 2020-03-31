// src/gatsby-theme-docz/index.js
import React from "react";
import { theme, ComponentsProvider } from "docz";

import "./docs.scss";

// Union Components
import Box from "@/Box/Box";
import Heading from "@/Heading/Heading";
import Text from "@/Text/Text";
import { Props } from "@/Props/Props";

import * as Headings from "./Headings";
import { DocsMenu } from "./DocsMenu";

const map = {
  h1: Headings.H1,
  h2: Headings.H2,
  h3: Headings.H3,
  h4: Headings.H4,
  h5: Headings.H5,
  h6: Headings.H6,
  p: Text,
  props: Props
};

const Theme = ({ children }) => (
  <main className="union-docs">
    <nav className="union-docs__nav">
      <Box background="dark">
        <Heading>Union.</Heading>
        <Text>Version 0.0.1</Text>
      </Box>
      <DocsMenu />
    </nav>
    <div className="union-docs__body">
      <ComponentsProvider components={map}>{children}</ComponentsProvider>
    </div>
  </main>
);

export default theme()(Theme);
