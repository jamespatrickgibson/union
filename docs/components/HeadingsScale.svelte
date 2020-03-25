<script>
  // Union Components
  import {
    Heading,
    Text,
    Stack
  } from "../../src/components/components.module.js";
</script>

<style lang="scss">
  @use "./src/scss/utils/all" as *;
  .type-examples {
    display: grid;
    grid-template-columns: 1fr 4fr;
    grid-gap: $space-l;
  }
</style>

<Stack>
  <div class="type-examples">
    <Text>Size 1</Text>
    <Heading size="1">
      Typography is the craft of endowing human language with a durable visual
      form.
    </Heading>
    <Text>Size 2</Text>
    <Heading size="2">
      Typography is the craft of endowing human language with a durable visual
      form.
    </Heading>
    <Text>Size 3</Text>
    <Heading size="3">
      Typography is the craft of endowing human language with a durable visual
      form.
    </Heading>
    <Text>Size 4</Text>
    <Heading size="4">
      Typography is the craft of endowing human language with a durable visual
      form.
    </Heading>
    <Text>Size 5</Text>
    <Heading size="5">
      Typography is the craft of endowing human language with a durable visual
      form.
    </Heading>
    <Text>Size 6</Text>
    <Heading size="6">
      Typography is the craft of endowing human language with a durable visual
      form.
    </Heading>
  </div>
</Stack>
