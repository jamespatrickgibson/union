<script>
  export let space = "m";
</script>

<style lang="scss">
  @use "./src/scss/utils/all" as *;

  .un-stack {
    display: block;

    &.is-space-xxs {
      :global(> * + *) {
        margin-top: $space-xxs;
      }
    }
    &.is-space-xs {
      :global(> * + *) {
        margin-top: $space-xs;
      }
    }
    &.is-space-s {
      :global(> * + *) {
        margin-top: $space-s;
      }
    }
    &.is-space-m {
      :global(> * + *) {
        margin-top: $space-m;
      }
    }
    &.is-space-l {
      :global(> * + *) {
        margin-top: $space-l;
      }
    }
    &.is-space-xl {
      :global(> * + *) {
        margin-top: $space-xl;
      }
    }
    &.is-space-xxl {
      :global(> * + *) {
        margin-top: $space-xxl;
      }
    }
  }
</style>

<div
  class="un-stack"
  class:is-space-xxs={space === 'xxs'}
  class:is-space-xs={space === 'xs'}
  class:is-space-s={space === 's'}
  class:is-space-m={space === 'm'}
  class:is-space-l={space === 'l'}
  class:is-space-xl={space === 'xl'}
  class:is-space-xxl={space === 'xxl'}>
  <slot />
</div>
