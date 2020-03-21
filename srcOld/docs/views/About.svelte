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
      <Heading level="1" size="1">About</Heading>
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
    <Heading level="2" size="4">Overview</Heading>
    <Text>
      Union can be used in two ways: The CSS version is lightweight and can be
      used in any framework you choose. The Svelte version will be installable
      as an NPM package and ready to use in any Svelte project.
    </Text>
    <Heading level="2" size="6">Why Svelte?</Heading>
    <Text>
      Svelte is a new Javascript framework that is very lean, and incredibly
      designer friendly. It's single file components, and easy to learn syntax
      makes Svelte a great choice for designers to build with.
    </Text>
    <Text>
      The Svelte community is also just beginning to build good component
      libraries and UI frameworks, and could certainly use something like Union
      to jumpstart projects.
    </Text>
    <Heading level="2" size="6">Designing in the Open</Heading>
    <Text>
      Since Union is such a new project, the design of the system will be
      continuously iterated in the open. For now, Union should be considered
      pre-release and unstable for any production use.
    </Text>
    <Heading level="2" size="6">Who?</Heading>
    <Text>
      Union is currently designed and built by
      <Link to="https://twitter.com/negativespaceio">@negativespaceio</Link>
    </Text>
  </Stack>
</section>
