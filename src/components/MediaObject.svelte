<style lang="scss">
	@use "../scss/utils/all" as *;

	.un-media-object {
		display: flex;

		&__media {
			// margin-right: var(--space-3);
			flex-basis: auto;
			flex-grow: 0;
			flex-shrink: 0;
		}
		&__content {
			flex-basis: auto;
			flex-grow: 1;
			flex-shrink: 1;
			text-align: left;
		}
		&__end {
			margin-left: auto;
		}
	}
</style>

<div class="un-media-object">
	<div class="un-media-object__media">
		<slot name="media" />
	</div>
	<div class="un-media-object__content">
		<slot />
	</div>
	<div class="un-media-object__end">
		<slot name="end" />
	</div>
</div>
