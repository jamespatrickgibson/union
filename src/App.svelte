<script>
  import Box from "./components/Box/Box.svelte";
  import Divider from "./components/Divider/Divider.svelte";
  import Stack from "./components/Stack/Stack.svelte";

  // Docs Components & Pages
  import About from "./docs/views/About.svelte";
  import DocsHeader from "./docs/components/DocsHeader/DocsHeader.svelte";
  import Typography from "./docs/views/Typography.svelte";
  import Zen from "./docs/views/Zen.svelte";
</script>

<style lang="scss" global>
  @import "./src/scss/union.scss";
  main {
  }
</style>

<DocsHeader />

<main>
  <Box padding="l">
    <Stack space="xl">
      <About />
      <Divider />
      <Typography />
      <Divider />
      <Zen />
    </Stack>
  </Box>
</main>
