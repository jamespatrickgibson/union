<style lang="scss">
  @use "./src/scss/utils/all" as *;

  .un-text {
    @include text-preset-02;
    line-height: 1.5;
  }
</style>

<p class="un-text">
  <slot />
</p>
