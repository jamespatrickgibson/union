<script>
  export let size = "3";
  export let level = "";
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

{#if level === '1'}
  <h1
    class="un-heading"
    class:is-size-1={size === '1'}
    class:is-size-2={size === '2'}
    class:is-size-3={size === '3'}
    class:is-size-4={size === '4'}
    class:is-size-5={size === '5'}
    class:is-size-6={size === '6'}>
    <slot />
  </h1>
{:else if level === '2'}
  <h2
    class="un-heading"
    class:is-size-1={size === '1'}
    class:is-size-2={size === '2'}
    class:is-size-3={size === '3'}
    class:is-size-4={size === '4'}
    class:is-size-5={size === '5'}
    class:is-size-6={size === '6'}>
    <slot />
  </h2>
{:else if level === '3'}
  <h3
    class="un-heading"
    class:is-size-1={size === '1'}
    class:is-size-2={size === '2'}
    class:is-size-3={size === '3'}
    class:is-size-4={size === '4'}
    class:is-size-5={size === '5'}
    class:is-size-6={size === '6'}>
    <slot />
  </h3>
{:else if level === '4'}
  <h4
    class="un-heading"
    class:is-size-1={size === '1'}
    class:is-size-2={size === '2'}
    class:is-size-3={size === '3'}
    class:is-size-4={size === '4'}
    class:is-size-5={size === '5'}
    class:is-size-6={size === '6'}>
    <slot />
  </h4>
{:else if level === '5'}
  <h5
    class="un-heading"
    class:is-size-1={size === '1'}
    class:is-size-2={size === '2'}
    class:is-size-3={size === '3'}
    class:is-size-4={size === '4'}
    class:is-size-5={size === '5'}
    class:is-size-6={size === '6'}>
    <slot />
  </h5>
{:else if level === '6'}
  <h6
    class="un-heading"
    class:is-size-1={size === '1'}
    class:is-size-2={size === '2'}
    class:is-size-3={size === '3'}
    class:is-size-4={size === '4'}
    class:is-size-5={size === '5'}
    class:is-size-6={size === '6'}>
    <slot />
  </h6>
{:else}
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
{/if}
