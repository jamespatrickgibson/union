<script>
  import Stack from "./components/Stack/Stack.svelte";

  // Docs Components
  import DocsHeader from "./docs/components/DocsHeader/DocsHeader.svelte";

  // Pages
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
  <Stack>
    <DocsHeader />
    <Zen />
    <Typography />
  </Stack>
</main>
