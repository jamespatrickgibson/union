<script>
  export let size = "2";
</script>

<style lang="scss">
  @use "./src/scss/utils/all" as *;

  .un-text {
    @include text-preset-02;
    font-weight: $weight-normal;
  }
</style>

<p
  class="un-text"
  class:is-size-1={size === '1'}
  class:is-size-2={size === '2'}
  class:is-size-3={size === '3'}>
  <slot />
</p>
