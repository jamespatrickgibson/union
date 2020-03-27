<style lang="scss">
  @use "./src/scss/utils/all" as *;
  .un-text-container {
    :global(> * + *) {
      margin-top: $space-m;
    }
    :global(h1) {
      @include text-preset-07--bold;
    }
    :global(h2) {
      @include text-preset-06--bold;
      margin-top: $type-scale-06;
    }
    :global(h3) {
      @include text-preset-05--bold;
      margin-top: $type-scale-05;
    }
    :global(h4) {
      @include text-preset-04--bold;
      margin-top: $type-scale-04;
    }
    :global(h5) {
      @include text-preset-03--bold;
      margin-top: $type-scale-03;
    }
    :global(h6) {
      @include text-preset-02--bold;
      margin-top: $type-scale-02;
    }
    :global(p) {
      @include text-preset-02;
      margin-top: $type-scale-02;
    }
    :global(a) {
      color: $color-primary-400;

      &:hover {
        color: $color-primary-700;
      }
    }
  }
</style>

<div class="un-text-container">
  <slot />
</div>
