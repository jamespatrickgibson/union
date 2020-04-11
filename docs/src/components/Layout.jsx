import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { Link } from "gatsby"
import { Box, Text, Stack } from "../../../union/components/components"

const shortcodes = { Box, Text, Stack }

const ListLink = (props) => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => (
  <MDXProvider components={shortcodes}>
    <nav>
      <ul>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
      </ul>
    </nav>
    <main>{children}</main>
  </MDXProvider>
)
