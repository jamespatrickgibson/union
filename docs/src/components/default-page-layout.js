import React from "react";
import MainNav from "./MainNav";
import { Box } from "../../../union/components/components";

import "../../../union/styles/union.scss";
import "./default-page-layout.scss";

export default ({ children }) => (
  <div class="default-page-layout">
    <div class="default-page-layout__nav">
      <MainNav />
    </div>
    <main class="default-page-layout__main">
      <Box>{children}</Box>
    </main>
  </div>
);
