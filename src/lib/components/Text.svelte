<script>
	export let tag = 'p';
</script>

{#if tag === 'h1'}
	<h1><slot /></h1>
{:else}
	<p><slot /></p>
{/if}

<style lang="scss">
	@use 'utils' as *;

	@mixin text-reset() {
		margin: unset;
	}

	h1 {
		@include text-reset();
		font-family: $font-family-default;
		font-weight: $font-weight-normal;
		color: $color-text-default;
	}
	p {
		@include text-reset();
		font-family: $font-family-default;
		font-weight: $font-weight-normal;
	}
</style>
