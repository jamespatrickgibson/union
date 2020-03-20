<script>
  // Union Components
  import Divider from "../../components/Divider/Divider.svelte";
  import Heading from "../../components/Heading/Heading.svelte";
  import Link from "../../components/Link/Link.svelte";
  import Stack from "../../components/Stack/Stack.svelte";
  import Text from "../../components/Text/Text.svelte";

  // Docs Components
  import InlineElements from "../components/InlineElements.svelte";
</script>

<style lang="scss">
  @use "./src/scss/utils/all" as *;

  @mixin text-preset-overflow {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  // Typographic Scale Layout
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

<div class="page-typography">
  <Stack space="xl">
    <Stack space="s">
      <Heading size="1">Typography</Heading>
    </Stack>
    <article id="headings">
      <Stack>
        <Heading>Headings</Heading>
        <div class="type-examples">
          <Text>Size 1</Text>
          <Heading size="1">
            Typography is the craft of endowing human language with a durable
            visual form.
          </Heading>
          <Text>Size 2</Text>
          <Heading size="2">
            Typography is the craft of endowing human language with a durable
            visual form.
          </Heading>
          <Text>Size 3</Text>
          <Heading size="3">
            Typography is the craft of endowing human language with a durable
            visual form.
          </Heading>
          <Text>Size 4</Text>
          <Heading size="4">
            Typography is the craft of endowing human language with a durable
            visual form.
          </Heading>
          <Text>Size 5</Text>
          <Heading size="5">
            Typography is the craft of endowing human language with a durable
            visual form.
          </Heading>
          <Text>Size 6</Text>
          <Heading size="6">
            Typography is the craft of endowing human language with a durable
            visual form.
          </Heading>
        </div>
      </Stack>
    </article>

    <Divider />

    <article id="text">
      <Stack>
        <Heading>Text</Heading>
        <Text>
          The
          <code>Text</code>
          component is primarily used for body copy.
        </Text>
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
          <InlineElements />
        </div>
      </Stack>
    </article>

    <Divider />

    <article id="links">
      <Stack>
        <Heading>Link</Heading>
        <Text>
          Here's some text with a
          <Link to="https://www.designwithunion.com">text link.</Link>
        </Text>
      </Stack>
    </article>

    <Divider />

    <article id="scale">
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
        <div class="type-examples">
          <Text>
            Size 11
            <br />
            (72/80 Display 1)
          </Text>
          <p class="text-preset is-size-11">
            Readers usually ignore the typographic interface, gliding
            comfortably along literacy’s habitual groove. Sometimes, however,
            the interface should be allowed to fail. By making itself evident,
            typography can illuminate the construction and identity of a page,
            screen, place, or product.
          </p>
          <Text>
            Size 10
            <br />
            (60/72 Display 2)
          </Text>
          <p class="text-preset is-size-10">
            Readers usually ignore the typographic interface, gliding
            comfortably along literacy’s habitual groove. Sometimes, however,
            the interface should be allowed to fail. By making itself evident,
            typography can illuminate the construction and identity of a page,
            screen, place, or product.
          </p>
          <Text>
            Size 9
            <br />
            (48/60 Display 3)
          </Text>
          <p class="text-preset is-size-09">
            Readers usually ignore the typographic interface, gliding
            comfortably along literacy’s habitual groove. Sometimes, however,
            the interface should be allowed to fail. By making itself evident,
            typography can illuminate the construction and identity of a page,
            screen, place, or product.
          </p>
          <Text>
            Size 8
            <br />
            (Heading 1)
          </Text>
          <p class="text-preset is-size-08">
            Readers usually ignore the typographic interface, gliding
            comfortably along literacy’s habitual groove. Sometimes, however,
            the interface should be allowed to fail. By making itself evident,
            typography can illuminate the construction and identity of a page,
            screen, place, or product.
          </p>
          <Text>
            Size 7
            <br />
            (Heading 2)
          </Text>
          <p class="text-preset is-size-07">
            Readers usually ignore the typographic interface, gliding
            comfortably along literacy’s habitual groove. Sometimes, however,
            the interface should be allowed to fail. By making itself evident,
            typography can illuminate the construction and identity of a page,
            screen, place, or product.
          </p>
          <Text>
            Size 6
            <br />
            (Heading 3)
          </Text>
          <p class="text-preset is-size-06">
            Readers usually ignore the typographic interface, gliding
            comfortably along literacy’s habitual groove. Sometimes, however,
            the interface should be allowed to fail. By making itself evident,
            typography can illuminate the construction and identity of a page,
            screen, place, or product.
          </p>
          <Text>
            Size 5
            <br />
            (Heading 4)
          </Text>
          <p class="text-preset is-size-05">
            Readers usually ignore the typographic interface, gliding
            comfortably along literacy’s habitual groove. Sometimes, however,
            the interface should be allowed to fail. By making itself evident,
            typography can illuminate the construction and identity of a page,
            screen, place, or product.
          </p>
          <Text>
            Size 4
            <br />
            (Heading 5)
          </Text>
          <p class="text-preset is-size-04">
            Readers usually ignore the typographic interface, gliding
            comfortably along literacy’s habitual groove. Sometimes, however,
            the interface should be allowed to fail. By making itself evident,
            typography can illuminate the construction and identity of a page,
            screen, place, or product.
          </p>
          <Text>
            Size 3
            <br />
            (Text 1)
          </Text>
          <p class="text-preset is-size-03">
            Readers usually ignore the typographic interface, gliding
            comfortably along literacy’s habitual groove. Sometimes, however,
            the interface should be allowed to fail. By making itself evident,
            typography can illuminate the construction and identity of a page,
            screen, place, or product.
          </p>
          <Text>
            Size 2
            <br />
            (Text 2)
          </Text>
          <p class="text-preset is-size-02">
            Readers usually ignore the typographic interface, gliding
            comfortably along literacy’s habitual groove. Sometimes, however,
            the interface should be allowed to fail. By making itself evident,
            typography can illuminate the construction and identity of a page,
            screen, place, or product.
          </p>
          <Text>
            Size 1
            <br />
            (Text 3)
          </Text>
          <p class="text-preset is-size-01">
            Readers usually ignore the typographic interface, gliding
            comfortably along literacy’s habitual groove. Sometimes, however,
            the interface should be allowed to fail. By making itself evident,
            typography can illuminate the construction and identity of a page,
            screen, place, or product.
          </p>
        </div>
      </Stack>
    </article>
  </Stack>
</div>
