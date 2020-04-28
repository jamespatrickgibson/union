import React from "react";

import tokens from "../../../union/styles/tokens/tokens-json.json";

const neutrals = Object.keys(tokens.color.neutral)
  .filter(key => tokens.color.neutral[key].value)
  .map(key => tokens.color.neutral[key]);

export default () => (
  <div>
    <div style={{ fontFamily: `var(--font-stack-base)` }}>
      {neutrals.map(swatch => (
        <div key={swatch.comment} style={{ backgroundColor: swatch.value }}>
          {swatch.name} {swatch.value}
        </div>
      ))}
    </div>
  </div>
);
