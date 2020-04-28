import React from "react";

import tokens from "../../../union/styles/tokens/tokens-json.json";

import { Text } from "../../../union/components/components";

const fontSizes = Object.keys(tokens.font.size)
  .filter(key => tokens.font.size[key].value)
  .map(key => tokens.font.size[key]);

export default () => (
  <div>
    <div style={{ fontFamily: `var(--font-stack-base)` }}>
      {fontSizes.map(size => (
        <div key={size.comment}>
          <div style={{ fontSize: size.value }}>Aa</div>
          {/* Typography is the craft of endowing human language with a durable
          visual form. */}
          <Text>
            {size.comment}
            <br />
            <pre>--{size.name}</pre>
          </Text>
        </div>
      ))}
    </div>
  </div>
);
