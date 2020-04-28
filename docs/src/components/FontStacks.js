import React from "react";

import tokens from "../../../union/styles/tokens/tokens-json.json";

import { Text } from "../../../union/components/components";

const stacks = Object.keys(tokens.font.stack)
  .filter(key => tokens.font.stack[key].value)
  .map(key => tokens.font.stack[key]);

export default () => (
  <div>
    {stacks.map(stack => (
      <div key={stack.comment}>
        <Text>{stack.attributes.item}</Text>
        <Text size="1">
          <span style={{ fontFamily: stack.value }}>{stack.value}</span>
        </Text>
      </div>
    ))}
  </div>
);
