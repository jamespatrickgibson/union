<script>
  export let size = "2";
</script>

<style lang="scss">
  @use "./src/scss/utils/all" as *;

  .un-text {
    font-weight: $weight-normal;

    &.is-size-1 {
      @include text-preset-01;
    }
    &.is-size-2 {
      @include text-preset-02;
    }
    &.is-size-3 {
      @include text-preset-03;
    }
  }
</style>

<p
  class="un-text"
  class:is-size-1={size === '1'}
  class:is-size-2={size === '2'}
  class:is-size-3={size === '3'}>
  Size {size}
  <slot />
</p>
