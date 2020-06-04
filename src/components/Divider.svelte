<script>
	export let width = "1";
</script>

<style lang="scss">
	@use "../scss/utils/all" as *;

	.un-divider {
		hr {
			flex-grow: 1;
			box-sizing: content-box;
			height: 0;
			overflow: visible;
			border: 0;
			border-top: 1px solid var(--color-bg-accent);
			margin: 0;
			clear: both;
			color: inherit;
		}

		&.is-width-2 hr {
			border-width: 2px;
		}
	}
</style>

<div class="un-divider" class:is-width-2="{width === '2'}">
	<hr />
</div>
