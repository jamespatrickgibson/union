<script>
  import Heading from "../components/Heading/Heading.svelte";
  import Stack from "../components/Stack/Stack.svelte";
  import Text from "../components/Text/Text.svelte";
</script>

<style lang="scss">
  @use "./src/scss/utils/all" as *;

  @mixin text-preset-overflow {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
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

<div class="page-typography">
  <Stack>
    <article class="headings">
      <Stack>
        <Heading>Headings</Heading>
        <Heading size="1">
          Typography is the craft of endowing human language with a durable
          visual form. (Size 1)
        </Heading>
        <Heading size="2">
          Typography is the craft of endowing human language with a durable
          visual form. (Size 2)
        </Heading>
        <Heading size="3">
          Typography is the craft of endowing human language with a durable
          visual form. (Size 3)
        </Heading>
        <Heading size="4">
          Typography is the craft of endowing human language with a durable
          visual form. (Size 4)
        </Heading>
        <Heading size="5">
          Typography is the craft of endowing human language with a durable
          visual form. (Size 5)
        </Heading>
        <Heading size="6">
          Typography is the craft of endowing human language with a durable
          visual form. (Size 6)
        </Heading>
      </Stack>
    </article>
    <article id="text">
      <Stack>
        <Heading>Text</Heading>
        <Text size="1">
          Legibility, in practice, amounts simply to what one is accustomed to.
          But this is not to say that because we have got used to something
          demonstrably less legible than something else would be if we could get
          used to it, we should make no effort to scrap the existing thing. This
          was done by the Florentines and Romans of the fifteenth century; it
          requires simply good sense in the originators & good will in the rest
          of us. (Size 1)
        </Text>
        <Text>
          Legibility, in practice, amounts simply to what one is accustomed to.
          But this is not to say that because we have got used to something
          demonstrably less legible than something else would be if we could get
          used to it, we should make no effort to scrap the existing thing. This
          was done by the Florentines and Romans of the fifteenth century; it
          requires simply good sense in the originators & good will in the rest
          of us. (Size 2, Default)
        </Text>
        <Text size="3">
          Legibility, in practice, amounts simply to what one is accustomed to.
          But this is not to say that because we have got used to something
          demonstrably less legible than something else would be if we could get
          used to it, we should make no effort to scrap the existing thing. This
          was done by the Florentines and Romans of the fifteenth century; it
          requires simply good sense in the originators & good will in the rest
          of us. (Size 3)
        </Text>
      </Stack>
    </article>
    <article class="scale">
      <Stack>
        <Heading>Typographic Scale</Heading>
        <Text size="1">
          Union is built with a classical typographic scale, inspired by
          Bringhurst's
          <em>“The Elements of Typographic Style.”</em>
        </Text>
        <Text>
          Letter spacing is determined using Inter's Dynamic Metrics, but rounds
          the values off to a 4pt grid multiple. Line heights are also adjusted
          to align to a 4pt baseline grid.
        </Text>

        <Heading size="4">The Scale</Heading>
        <p class="text-preset is-size-11">
          11. (72/80 Display 1) Readers usually ignore the typographic
          interface, gliding comfortably along literacy’s habitual groove.
          Sometimes, however, the interface should be allowed to fail. By making
          itself evident, typography can illuminate the construction and
          identity of a page, screen, place, or product.
        </p>
        <p class="text-preset is-size-10">
          10. (60/72 Display 2) Readers usually ignore the typographic
          interface, gliding comfortably along literacy’s habitual groove.
          Sometimes, however, the interface should be allowed to fail. By making
          itself evident, typography can illuminate the construction and
          identity of a page, screen, place, or product.
        </p>
        <p class="text-preset is-size-09">
          9. (48/60 Display 3) Readers usually ignore the typographic interface,
          gliding comfortably along literacy’s habitual groove. Sometimes,
          however, the interface should be allowed to fail. By making itself
          evident, typography can illuminate the construction and identity of a
          page, screen, place, or product.
        </p>
        <p class="text-preset is-size-08">
          8. (Heading 1) Readers usually ignore the typographic interface,
          gliding comfortably along literacy’s habitual groove. Sometimes,
          however, the interface should be allowed to fail. By making itself
          evident, typography can illuminate the construction and identity of a
          page, screen, place, or product.
        </p>
        <p class="text-preset is-size-07">
          7. (Heading 2) Readers usually ignore the typographic interface,
          gliding comfortably along literacy’s habitual groove. Sometimes,
          however, the interface should be allowed to fail. By making itself
          evident, typography can illuminate the construction and identity of a
          page, screen, place, or product.
        </p>
        <p class="text-preset is-size-06">
          6. (Heading 3) Readers usually ignore the typographic interface,
          gliding comfortably along literacy’s habitual groove. Sometimes,
          however, the interface should be allowed to fail. By making itself
          evident, typography can illuminate the construction and identity of a
          page, screen, place, or product.
        </p>
        <p class="text-preset is-size-05">
          5. (Heading 4) Readers usually ignore the typographic interface,
          gliding comfortably along literacy’s habitual groove. Sometimes,
          however, the interface should be allowed to fail. By making itself
          evident, typography can illuminate the construction and identity of a
          page, screen, place, or product.
        </p>
        <p class="text-preset is-size-04">
          4. (Heading 5) Readers usually ignore the typographic interface,
          gliding comfortably along literacy’s habitual groove. Sometimes,
          however, the interface should be allowed to fail. By making itself
          evident, typography can illuminate the construction and identity of a
          page, screen, place, or product.
        </p>
        <p class="text-preset is-size-03">
          3. (Text 1) Readers usually ignore the typographic interface, gliding
          comfortably along literacy’s habitual groove. Sometimes, however, the
          interface should be allowed to fail. By making itself evident,
          typography can illuminate the construction and identity of a page,
          screen, place, or product.
        </p>
        <p class="text-preset is-size-02">
          2. (Text 2) Readers usually ignore the typographic interface, gliding
          comfortably along literacy’s habitual groove. Sometimes, however, the
          interface should be allowed to fail. By making itself evident,
          typography can illuminate the construction and identity of a page,
          screen, place, or product.
        </p>
        <p class="text-preset is-size-01">
          1. (Text 3) Readers usually ignore the typographic interface, gliding
          comfortably along literacy’s habitual groove. Sometimes, however, the
          interface should be allowed to fail. By making itself evident,
          typography can illuminate the construction and identity of a page,
          screen, place, or product.
        </p>
      </Stack>
    </article>
  </Stack>
</div>
