<style lang="scss">
  @use "./src/scss/utils/all" as *;

  .un-stack {
    display: block;

    :global(> * + *) {
      margin-top: $space-m;
    }
  }
</style>

<div class="un-stack">
  <slot />
</div>
