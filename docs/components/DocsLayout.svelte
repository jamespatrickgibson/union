<script>
  import { Box, Link, Stack } from "../../src/components/components.module.js";

  // Docs Components & Pages
  import DocsHeader from "../components/DocsHeader.svelte";
</script>

<style lang="scss">
  @use "./src/scss/utils/all" as *;
  .docs-layout {
    display: grid;
    grid-template-columns: grid-8pt(26) 1fr;

    &__nav {
      background: $color-grey-050;
    }
    &__main {
      //
    }
  }
</style>

<div class="docs-layout">
  <nav class="docs-layout__nav">
    <DocsHeader />
    <Box>
      <ul>
        <li>
          <Link to="#about">About</Link>
        </li>
        <li>
          <Link to="#typography">Typography</Link>
        </li>
      </ul>
    </Box>
  </nav>
  <main class="docs-layout__main">
    <slot />
  </main>
</div>
