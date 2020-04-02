/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { useConfig } from "docz";
import { LiveProvider, LiveError, LivePreview, LiveEditor } from "react-live";
import { Resizable } from "re-resizable";
import copy from "copy-text-to-clipboard";

import { Wrapper } from "./Wrapper";
import { usePrismTheme } from "~utils/theme";

// Import Union Components
import Box from "@/Box/Box";

const getResizableProps = (width, setWidth) => ({
  minWidth: 260,
  maxWidth: "100%",
  size: {
    width: width,
    height: "auto"
  },
  style: {
    margin: 0,
    marginRight: "auto"
  },
  enable: {
    top: false,
    right: true,
    bottom: false,
    left: false,
    topRight: false,
    bottomRight: false,
    bottomLeft: false,
    topLeft: false
  },
  onResizeStop: (e, direction, ref) => {
    setWidth(ref.style.width);
  }
});

const transformCode = code => {
  if (code.startsWith("()") || code.startsWith("class")) return code;
  return `<React.Fragment>${code}</React.Fragment>`;
};

export const Playground = ({ code, scope, language, useScoping = false }) => {
  const {
    themeConfig: { showPlaygroundEditor, showLiveError }
  } = useConfig();

  // Makes sure scope is only given on mount to avoid infinite re-render on hot reloads
  const [scopeOnMount] = React.useState(scope);
  const theme = usePrismTheme();
  const [showingCode, setShowingCode] = React.useState(showPlaygroundEditor);
  const [width, setWidth] = React.useState("100%");
  const resizableProps = getResizableProps(width, setWidth);

  const copyCode = () => copy(code);
  const toggleCode = () => setShowingCode(s => !s);

  return (
    <Resizable {...resizableProps} data-testid="playground">
      <LiveProvider
        code={code}
        scope={scopeOnMount}
        transformCode={transformCode}
        language={language}
        theme={theme}
      >
        <div className="union-docs__live-preview">
          <Box background="light">
            <LivePreview />
          </Box>
        </div>
        <div>
          {/* <Wrapper
            content="preview"
            useScoping={useScoping}
            showingCode={showingCode}
          >
            {showLivePreview && <LivePreview data-testid="live-preview" />}
          </Wrapper> */}
          <div>
            <button onClick={copyCode}>Copy Code</button>
            <button onClick={toggleCode}>View and Edit Code</button>
          </div>
        </div>
        {showingCode && (
          <Wrapper
            content="editor"
            useScoping={useScoping}
            showingCode={showingCode}
          >
            <Box background="light">
              <LiveEditor data-testid="live-editor" />
            </Box>
          </Wrapper>
        )}
        {showLiveError && <LiveError data-testid="live-error" />}
      </LiveProvider>
    </Resizable>
  );
};
