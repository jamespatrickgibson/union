<script>
  import Box from "../../../components/Box/Box.svelte";
  import Text from "../../../components/Text/Text.svelte";
</script>

<style lang="scss">
  @use "./src/scss/utils/all" as *;
</style>

<header>
  <Box background="neutralLight" padding="l">
    <Text>
      Union. A design style boilerplate for creating scalable design
      architecture.
    </Text>
    <nav>
      <Text>Version 0.0.1</Text>
      <Text>
        <a href="https://github.com/jamespatrickgibson/union">View on Github</a>
        <br />
        <a
          href="https://raw.githubusercontent.com/jamespatrickgibson/union/master/dist/css/union.css">
          Download union.css
        </a>
      </Text>
    </nav>
  </Box>
</header>
