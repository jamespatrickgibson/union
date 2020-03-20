<script>
  // Union Components
  import Divider from "../../components/Divider/Divider.svelte";
  import Heading from "../../components/Heading/Heading.svelte";
  import Inline from "../../components/Inline/Inline.svelte";
  import Link from "../../components/Link/Link.svelte";
  import Stack from "../../components/Stack/Stack.svelte";
  import Text from "../../components/Text/Text.svelte";
</script>

<section>
  <Stack>
    <Stack space="s">
      <Heading>About</Heading>
      <Text size="1">
        Union is a design system boilerplate and component library which is
        inspired by traditional graphic design theories and practices.
      </Text>
      <Text>
        <Link to="https://github.com/jamespatrickgibson/union">
          View on Github
        </Link>
      </Text>
    </Stack>
    <Heading size="4">Overview</Heading>
    <Text>
      Union can be used in two ways: The CSS version is lightweight and can be
      used in any framework you choose. The Svelte version will be installable
      as an NPM package and ready to use in any Svelte project.
    </Text>
    <Heading size="5">Designed in the Open</Heading>
    <Text>
      Since Union is such a new project, the design of the system will be
      continuously iterated in the open. For now, Union should be considered
      pre-release and unstable for any production use.
    </Text>
  </Stack>
</section>
