<script>
	import { createEventDispatcher } from "svelte";
	import { text } from "svelte/internal";

	export let size = "1";
	export let type = "primary";
	export let variant = "default";

	const dispatch = createEventDispatcher();

	function onClick(event) {
		dispatch("click", event);
	}
</script>

<style lang="scss">
	@use "../scss/utils/all" as *;

	@mixin primary-button($text, $normal, $hover, $active) {
		background-color: $normal;
		border-color: $normal;
		color: $text;
		&:hover {
			background-color: $hover;
			border-color: $hover;
		}
		&:active {
			background-color: $active;
			border-color: $active;
		}
	}

	@mixin secondary-button($normal, $hover, $active) {
		border-color: $normal;
		&:hover {
			background-color: $hover;
		}
		&:active {
			background-color: $active;
			border-color: $active;
		}
	}

	@mixin ghost-button($normal, $hover, $active) {
		background-color: transparent;
		border-color: transparent;
		&:hover {
			background-color: $hover;
		}
		&:active {
			background-color: $active;
		}
	}

	.un-button {
		@include form-field-reset;
		display: inline-flex;
		padding: 0 var(--space-3);
		border-radius: var(--size-border-radius-1);
		font-weight: var(--weight-bold);
		border-width: var(--size-border-1);
		border-style: solid;
		border-color: transparent;
		cursor: pointer;

		// Sizes
		&.is-size-1 {
			@include text-preset(2);
			height: grid-8pt(3);
		}
		&.is-size-2 {
			@include text-preset(3);
			font-weight: var(--weight-bold);
			height: grid-8pt(4);
		}

		// Types
		&.is-type-primary {
			@include primary-button(
				var(--color-white),
				var(--color-neutral-700),
				var(--color-neutral-700),
				var(--color-neutral-800)
			);

			&.is-variant-brand {
				@include primary-button(
					var(--color-white),
					var(--color-primary-600),
					var(--color-primary-700),
					var(--color-primary-800)
				);
			}
		}
		&.is-type-secondary {
			@include secondary-button(
				var(--color-neutral-600),
				var(--color-neutral-600),
				var(--color-neutral-800)
			);
			&.is-variant-brand {
				@include secondary-button(
					var(--color-primary-600),
					var(--color-primary-600),
					var(--color-primary-800)
				);
			}
		}
		&.is-type-ghost {
			@include ghost-button(
				var(--color-neutral-600),
				var(--color-neutral-600),
				var(--color-neutral-800)
			);
			&.is-variant-brand {
				@include ghost-button(
					var(--color-primary-600),
					var(--color-primary-600),
					var(--color-primary-800)
				);
			}
		}
	}
</style>

<button
	class="un-button"
	class:is-size-1="{size === '1'}"
	class:is-size-2="{size === '2'}"
	class:is-type-primary="{type === 'primary'}"
	class:is-type-secondary="{type === 'secondary'}"
	class:is-type-ghost="{type === 'ghost'}"
	class:is-variant-brand="{variant === 'brand'}"
	on:click="{onClick}"
>
	<slot />
</button>
