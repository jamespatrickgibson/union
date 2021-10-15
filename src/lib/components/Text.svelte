<script>
	import clsx from 'clsx';

	export let tag = 'p';
	export let size = 4;

	let classes = clsx({
		text: true,
		'is-size-1': size === 1,
		'is-size-2': size === 2,
		'is-size-3': size === 3,
		'is-size-4': size === 4,
		'is-size-5': size === 5,
		'is-size-6': size === 6,
		'is-size-7': size === 7,
		'is-size-8': size === 8,
		'is-size-9': size === 9,
		'is-size-10': size === 10
	});
</script>

{#if tag === 'h1'}
	<h1 class={classes}>
		<slot />
	</h1>
{:else if tag === 'h2'}
	<h2 class={classes}>
		<slot />
	</h2>
{:else if tag === 'h3'}
	<h3 class={classes}>
		<slot />
	</h3>
{:else if tag === 'h4'}
	<h4 class={classes}>
		<slot />
	</h4>
{:else if tag === 'h5'}
	<h5 class={classes}>
		<slot />
	</h5>
{:else if tag === 'h6'}
	<h6 class={classes}>
		<slot />
	</h6>
{:else}
	<p class={classes}>
		<slot />
	</p>
{/if}

<style lang="scss">
	@use 'utils' as *;

	// Resets any typography back to a default size/state
	@mixin component-text-reset() {
		font-family: var(--font-family-default);
		font-weight: unset;
		font-style: normal;
		letter-spacing: 0;
		margin: unset;
		text-align: left;
		text-decoration: none;
		text-indent: 0;
		text-shadow: none;
		text-transform: none;
	}

	.text {
		@include component-text-reset();

		// Sizes
		@each $size, $var in $type-scale {
			&.is-size-#{$size} {
				font-size: $var;
			}
		}
	}
</style>
