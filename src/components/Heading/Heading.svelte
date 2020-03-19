<script>
  export let size = "3";
</script>

<style lang="scss">
  @use "./src/scss/utils/all" as *;

  .un-heading {
    font-weight: $weight-normal;

    &.is-size-1 {
      @include text-preset-07--bold;
    }
    &.is-size-2 {
      @include text-preset-06--bold;
    }
    &.is-size-3 {
      @include text-preset-05--bold;
    }
    &.is-size-4 {
      @include text-preset-04--bold;
    }
    &.is-size-5 {
      @include text-preset-03--bold;
    }
    &.is-size-6 {
      @include text-preset-02--bold;
    }
  }
</style>

<p
  class="un-heading"
  class:is-size-1={size === '1'}
  class:is-size-2={size === '2'}
  class:is-size-3={size === '3'}
  class:is-size-4={size === '4'}
  class:is-size-5={size === '5'}
  class:is-size-6={size === '6'}>
  <slot />
</p>
