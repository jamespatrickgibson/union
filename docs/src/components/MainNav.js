import React from "react";
import { Link } from "gatsby";
import { Text } from "../../../union/components/components";

export default () => (
  <nav>
    <Text>
      <Link to="/">Home</Link>
    </Text>
    <Text>
      <Link to="/about/">About</Link>
    </Text>
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
  </nav>
);
