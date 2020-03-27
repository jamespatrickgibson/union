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
    position: fixed;
    overflow: hidden;
    height: 100vh;
    width: 100vw;

    &__nav {
      background: $color-grey-050;
      display: flex;
      flex-direction: column;
      height: 100vh;
      overflow: hidden;
      position: relative;
    }
    &__nav-body {
      height: 100%;
      overflow-x: hidden;
      overflow-y: scroll;
    }

    &__nav-header {
      position: relative;
      flex-shrink: 0;
    }
    &__main {
      display: flex;
      flex-direction: column;
      height: 100vh;
      overflow: hidden;
      position: relative;
    }
    &__main-content {
      height: 100%;
      overflow-x: hidden;
      overflow-y: scroll;
    }
  }
</style>

<div class="docs-layout">
  <nav class="docs-layout__nav">
    <div class="docs-layout__nav-header">
      <DocsHeader />
    </div>
    <div class="docs-layout__nav-body">
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

    </div>
  </nav>
  <main class="docs-layout__main">
    <div class="docs-layout__main-content">
      <slot />
    </div>
  </main>
</div>
