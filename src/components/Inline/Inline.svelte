<script>
  export let space = "m";
</script>

<style lang="scss">
  @use "./src/scss/utils/all" as *;

  .un-inline {
    display: block;

    &.is-space-xxs {
      :global(> * + *) {
        margin-left: $space-xxs;
      }
    }
    &.is-space-xs {
      :global(> * + *) {
        margin-left: $space-xs;
      }
    }
    &.is-space-s {
      :global(> * + *) {
        margin-left: $space-s;
      }
    }
    &.is-space-m {
      :global(> * + *) {
        margin-left: $space-m;
      }
    }
    &.is-space-l {
      :global(> * + *) {
        margin-left: $space-l;
      }
    }
    &.is-space-xl {
      :global(> * + *) {
        margin-left: $space-xl;
      }
    }
    &.is-space-xxl {
      :global(> * + *) {
        margin-left: $space-xxl;
      }
    }
  }
</style>

<div
  class="un-inline"
  class:is-space-xxs={space === 'xxs'}
  class:is-space-xs={space === 'xs'}
  class:is-space-s={space === 's'}
  class:is-space-m={space === 'm'}
  class:is-space-l={space === 'l'}
  class:is-space-xl={space === 'xl'}
  class:is-space-xxl={space === 'xxl'}>
  <slot />
</div>
