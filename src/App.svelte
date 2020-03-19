<script>
  import Stack from "./components/Stack/Stack.svelte";
  import Text from "./components/Text/Text.svelte";

  // Pages
  import Typography from "./views/Typography.svelte";
  import Zen from "./views/Zen.svelte";
</script>

<style lang="scss" global>
  @import "./src/scss/union.scss";
  main {
    padding: 2rem;
  }
</style>

<main>
  <Stack>
    <Text>
      Union. A design style boilerplate for creating scalable design
      architecture.
    </Text>
    <Zen />
    <Typography />
  </Stack>
</main>
