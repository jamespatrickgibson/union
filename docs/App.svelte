<script>
  import {
    Box,
    Component,
    Divider,
    Heading,
    Text,
    TextContainer,
    Stack
  } from "../src/components/components.module.js";

  // Docs Components & Pages
  import About from "./views/About.md";
  import Typography from "./views/Typography.svelte";
  import Zen from "./views/Zen.svelte";
  import DocsLayout from "./components/DocsLayout.svelte";
</script>

<style lang="scss" global>
  @import "src/scss/union.scss";
</style>

<DocsLayout>
  <Box padding="l">
    <Stack space="xl">
      <About />
      <Divider />
      <Typography />
      <Zen />
    </Stack>
  </Box>
</DocsLayout>
