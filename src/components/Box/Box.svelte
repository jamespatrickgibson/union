<script>
  export let padding = "m";
  export let background = "";
</script>

<style lang="scss">
  @use "./src/scss/utils/all" as *;

  .un-box {
    &.is-space-xxs {
      padding: $space-xxs;
    }
    &.is-space-xs {
      padding: $space-xs;
    }
    &.is-space-s {
      padding: $space-s;
    }
    &.is-space-m {
      padding: $space-m;
    }
    &.is-space-l {
      padding: $space-l;
    }
    &.is-space-xl {
      padding: $space-xl;
    }
    &.is-space-xxl {
      padding: $space-xxl;
    }

    &.is-bg-neutral {
      background: $background-neutral;
    }
    &.is-bg-neutral-light {
      background: $background-neutral-light;
    }
  }
</style>

<div
  class="un-box"
  class:is-space-xxs={padding === 'xxs'}
  class:is-space-xs={padding === 'xs'}
  class:is-space-s={padding === 's'}
  class:is-space-m={padding === 'm'}
  class:is-space-l={padding === 'l'}
  class:is-space-xl={padding === 'xl'}
  class:is-space-xxl={padding === 'xxl'}
  class:is-bg-neutral={background === 'neutral'}
  class:is-bg-neutral-light={background === 'neutralLight'}>
  <slot />
</div>
