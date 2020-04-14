import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { useMDXScope } from "gatsby-plugin-mdx/context";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

import { Box, Heading, Text, Stack } from "../union/components/components";

const Code = ({ codeString }) => {
  const components = useMDXScope();
  return (
    <LiveProvider code={codeString} scope={components}>
      <LivePreview />
      <LiveEditor />
      <LiveError />
    </LiveProvider>
  );
};

const components = {
  h1: props => <Heading size="1">{props.children}</Heading>,
  h2: props => <Heading size="2">{props.children}</Heading>,
  h3: props => <Heading size="3">{props.children}</Heading>,
  p: props => <Text>{props.children}</Text>,
  pre: props => <Code codeString={props.children.props.children} />,
  Box,
  Heading,
  Text,
  Stack,
};

export const wrapRootElement = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>;
};
