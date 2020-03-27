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
  import Headings from "./views/Headings.md";
  import TextDocs from "./views/Text.docs.md";
  import Typography from "./views/Typography.svelte";
  import DocsLayout from "./components/DocsLayout.svelte";
</script>

<style lang="scss" global>
  @import "src/scss/union.scss";
</style>

<DocsLayout>
  <Stack space="xl">
    <About />
    <Divider />
    <Headings />
    <TextDocs />
    <Typography />
  </Stack>
</DocsLayout>
