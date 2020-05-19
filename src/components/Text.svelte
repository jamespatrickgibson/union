<script>
	import clsx from "clsx";
	export let tag = "p";
	export let size = "3";
	export let weight = "normal";
	export let color = "default";

	let classes = clsx({
		"un-text": true,
		"is-size-1": size === "1",
		"is-size-2": size === "2",
		"is-size-3": size === "3",
		"is-size-4": size === "4",
		"is-size-5": size === "5",
		"is-size-6": size === "6",
		"is-size-7": size === "7",
		"is-size-8": size === "8",
		"is-size-9": size === "9",
		"is-size-10": size === "10",
		"is-size-11": size === "11",
		"is-size-12": size === "12",
		"is-size-12": size === "12",
		"is-weight-normal": weight === "normal",
		"is-weight-medium": weight === "medium",
		"is-weight-bold": weight === "bold",
		"is-color-default": color === "default",
		"is-color-muted": color === "muted",
		"is-color-disabled": color === "disabled",
	});
</script>

<style lang="scss">
	@use "../scss/utils/all" as *;

	.un-text {
		margin: initial;
		font-weight: initial;
		font-family: var(--family-primary);

		// Sizes
		@each $size, $var in $type-scale {
			&.is-size-#{$size} {
				font-size: var(--type-scale-#{$size});
				line-height: var(--line-height-#{$size});
				letter-spacing: var(--tracking-#{$size});
			}
		}

		// Weights
		@each $name, $var in $font-weights {
			&.is-weight-#{$name} {
				font-weight: $var;
			}
		}

		&.is-color-default {
			color: var(--color-text-default);
		}
		&.is-color-muted {
			color: var(--color-text-muted);
		}
		&.is-color-disabled {
			color: var(--color-text-disabled);
		}
	}
</style>

{#if tag === 'h1'}
	<h1 class="{classes}">
		<slot />
	</h1>
{:else if tag === 'h2'}
	<h2 class="{classes}">
		<slot />
	</h2>
{:else if tag === 'h3'}
	<h3 class="{classes}">
		<slot />
	</h3>
{:else if tag === 'h4'}
	<h4 class="{classes}">
		<slot />
	</h4>
{:else if tag === 'h5'}
	<h5 class="{classes}">
		<slot />
	</h5>
{:else if tag === 'h6'}
	<h6 class="{classes}">
		<slot />
	</h6>
{:else if tag === 'p'}
	<p class="{classes}">
		<slot />
	</p>
{/if}
