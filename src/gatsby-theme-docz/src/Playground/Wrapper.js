/** @jsx jsx */
import { useState } from "react";
import { jsx } from "theme-ui";
import { useConfig } from "docz";
import Iframe from "react-frame-component";
import ReactResizeDetector from "react-resize-detector";

const CLEAR_PADDING = `<style> body { padding: 0; margin: 0; }  </style>`;
const INITIAL_IFRAME_CONTENT = `<!DOCTYPE html><html><head> ${CLEAR_PADDING} </head><body><div></div></body></html>`;

const IframeWrapper = ({ children }) => {
  const [setHeight] = useState();
  return (
    <Iframe initialContent={INITIAL_IFRAME_CONTENT}>
      {children}
      <ReactResizeDetector
        handleHeight
        onResize={({ height }) => {
          setHeight(height);
        }}
      />
    </Iframe>
  );
};

const NormalWrapper = ({ children, style }) => {
  return <div>{children}</div>;
};

export const Wrapper = ({ children, content, useScoping, showingCode }) => {
  const {
    themeConfig: { useScopingInPlayground }
  } = useConfig();

  const Element =
    useScoping || useScopingInPlayground ? IframeWrapper : NormalWrapper;

  return <Element>{children}</Element>;
};
