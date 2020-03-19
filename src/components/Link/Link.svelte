<script>
  export let to = "";
</script>

<style lang="scss">
  @use "./src/scss/utils/all" as *;

  .un-link {
    color: $color-primary-400;

    &:hover {
      color: $color-primary-700;
    }
  }
</style>

<a class="un-link" href={to}>
  <slot />
</a>
