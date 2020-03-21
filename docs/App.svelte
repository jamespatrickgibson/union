<script>
  import {
    Box,
    Component,
    Divider,
    Heading,
    Text,
    Stack
  } from "../src/components/components.module.js";

  // Docs Components & Pages
  import About from "./views/About.svelte";
  import DocsHeader from "./components/DocsHeader/DocsHeader.svelte";
</script>

<style lang="scss" global>
  @import "./src/scss/union.scss";
</style>

<DocsHeader />

<main>
  <Box padding="l">
    <Stack space="xl">
      <About />
      <!-- <About />
      <Divider />
      <Typography />
      <Divider />
      <Zen /> -->
    </Stack>
  </Box>
</main>
