<script>
  import {
    Box,
    Stack,
    Text,
    TextContainer,
  } from "../../src/components/components.module.js";
;
</script>

<style lang="scss">
  @use "./src/scss/utils/all" as *;

  @mixin text-preset-overflow {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .type-examples {
    display: grid;
    grid-template-columns: 1fr 4fr;
    grid-gap: $space-l;
  }

  .text-preset {
    &.is-size-11 {
      @include text-preset-11;
      @include text-preset-overflow;
    }
    &.is-size-10 {
      @include text-preset-10;
      @include text-preset-overflow;
    }
    &.is-size-09 {
      @include text-preset-09;
      @include text-preset-overflow;
    }
    &.is-size-08 {
      @include text-preset-08;
      @include text-preset-overflow;
    }
    &.is-size-07 {
      @include text-preset-07;
    }
    &.is-size-06 {
      @include text-preset-06;
    }
    &.is-size-05 {
      @include text-preset-05;
    }
    &.is-size-04 {
      @include text-preset-04;
    }
    &.is-size-03 {
      @include text-preset-03;
    }
    &.is-size-02 {
      @include text-preset-02;
    }
    &.is-size-01 {
      @include text-preset-01;
    }
  }
</style>

<Box padding="xxl" squish>
  <Stack>
    <TextContainer>
      ## Text
      The Text component is primarily used for body copy.
    </TextContainer>

    <div class="type-examples">
      <Text>Size 1</Text>
      <Text size="1">
        Legibility, in practice, amounts simply to what one is accustomed
        to. But this is not to say that because we have got used to
        something demonstrably less legible than something else would be if
        we could get used to it, we should make no effort to scrap the
        existing thing. This was done by the Florentines and Romans of the
        fifteenth century; it requires simply good sense in the originators
        & good will in the rest of us.
      </Text>
      <Text>Size 2</Text>
      <Text>
        Legibility, in practice, amounts simply to what one is accustomed
        to. But this is not to say that because we have got used to
        something demonstrably less legible than something else would be if
        we could get used to it, we should make no effort to scrap the
        existing thing. This was done by the Florentines and Romans of the
        fifteenth century; it requires simply good sense in the originators
        & good will in the rest of us.
      </Text>
      <Text>Size 3</Text>
      <Text size="3">
        Legibility, in practice, amounts simply to what one is accustomed
        to. But this is not to say that because we have got used to
        something demonstrably less legible than something else would be if
        we could get used to it, we should make no effort to scrap the
        existing thing. This was done by the Florentines and Romans of the
        fifteenth century; it requires simply good sense in the originators
        & good will in the rest of us.
      </Text>
      <Text>Inline Element Test</Text>
    </div>
  </Stack>
</Box>