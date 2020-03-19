<script>
  import Box from "../../../components/Box/Box.svelte";
  import Heading from "../../../components/Heading/Heading.svelte";
  import Inline from "../../../components/Inline/Inline.svelte";
  import Text from "../../../components/Text/Text.svelte";
  import Stack from "../../../components/Stack/Stack.svelte";
</script>

<style lang="scss">
  @use "./src/scss/utils/all" as *;
</style>

<header>
  <Box background="dark" padding="l" squish>
    <Stack>
      <div>
        <Heading size="1">union.</Heading>
        <Text size="1">
          A design style boilerplate for creating scalable design architecture.
        </Text>
        <Text size="3">Work in Progress • Version 0.0.1</Text>
      </div>
      <nav>
        <Text size="3">
          <Inline space="xs">
            <a href="https://github.com/jamespatrickgibson/union">
              View on Github
            </a>
            <a
              href="https://raw.githubusercontent.com/jamespatrickgibson/union/master/dist/css/union.css">
              Download union.css
            </a>
          </Inline>

        </Text>
        <Text size="3" />
      </nav>
    </Stack>
  </Box>
</header>
