import React from "react";
import { Link } from "gatsby";
import { Box, Heading, Text } from "../../../union/components/components";

export default () => (
  <nav>
    <Box>
      <Text>
        <Link to="/">Home</Link>
      </Text>

      <Heading size="5">Overview</Heading>
      <Text>
        <Link to="/about/">About</Link>
      </Text>

      <Heading size="5">Design</Heading>
      <Text>
        <Link to="/design-tokens/">Tokens</Link>
      </Text>

      <Heading size="5">Components</Heading>
      <Text>
        <Link to="/box/">Box</Link>
      </Text>
      <Text>
        <Link to="/heading/">Heading</Link>
      </Text>
      <Text>
        <Link to="/stack/">Stack</Link>
      </Text>
      <Text>
        <Link to="/text/">Text</Link>
      </Text>
    </Box>
  </nav>
);
