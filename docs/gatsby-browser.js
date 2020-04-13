import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { useMDXScope } from "gatsby-plugin-mdx/context";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

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
  pre: props => <Code codeString={props.children.props.children} />,
};

export const wrapRootElement = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>;
};
