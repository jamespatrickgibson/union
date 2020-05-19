<script>
	export let to;
	export let type = "default";
</script>

<style lang="scss">
	.un-link {
		&.is-default {
			color: inherit;

			&:hover {
				color: var(--color-text-interactive);
			}
		}

		&.is-implied {
			color: var(--color-content-default);
			text-decoration: none;

			&:hover {
				text-decoration: underline;
			}
		}

		&.is-article {
			text-decoration: underline;
			color: var(--color-text-interactive);
		}
	}
</style>

<a
	class="un-link"
	class:is-default="{type === 'default'}"
	class:is-article="{type === 'article'}"
	class:is-implied="{type === 'implied'}"
	href="{to}"
>
	<slot />
</a>
