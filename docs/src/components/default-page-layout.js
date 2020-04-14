import React from "react";
import MainNav from "./MainNav";
import { Box } from "../../../union/components/components";

import "../../../union/styles/union.scss";

export default ({ children }) => (
  <div>
    <MainNav />
    <main>
      <Box>{children}</Box>
    </main>
  </div>
);
