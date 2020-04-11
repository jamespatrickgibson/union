import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { Link } from "gatsby";
import {
  Box,
  Heading,
  Text,
  Stack,
} from "../../../union/components/components";

const shortcodes = { Box, Heading, Text, Stack };

const ListLink = (props) => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
);

export default ({ children }) => (
  <MDXProvider components={shortcodes}>
    <nav>
      <ul>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/box/">Box</ListLink>
        <ListLink to="/heading/">Heading</ListLink>
        <ListLink to="/stack/">Stack</ListLink>
        <ListLink to="/text/">Text</ListLink>
      </ul>
    </nav>
    <main>{children}</main>
  </MDXProvider>
);
