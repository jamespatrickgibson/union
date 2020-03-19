<script>
  import Stack from "./components/Stack/Stack.svelte";

  // Docs Components & Pages
  import DocsHeader from "./docs/components/DocsHeader/DocsHeader.svelte";
  import Typography from "./docs/views/Typography.svelte";
  import Zen from "./docs/views/Zen.svelte";
</script>

<style lang="scss" global>
  @import "./src/scss/union.scss";
  main {
    padding: 2rem;
  }
</style>

<main>
  <Stack space="xl">
    <DocsHeader />
    <Typography />
    <Zen />
  </Stack>
</main>
