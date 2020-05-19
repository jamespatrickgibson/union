<style lang="scss">
	@use "../../src/scss/utils/all" as *;

	.un-split-view {
		--size-split-view-gap: var(--space-1s);
		overflow: hidden;
		height: 100%;

		&__wrapper {
			display: flex;
			flex-wrap: wrap;
			margin: calc(var(--size-split-view-gap) / 2 * -1);
			height: calc(var(--space-2) + 100%);
		}

		&__primary,
		&__secondary {
			margin: calc(var(--size-split-view-gap) / 2);
		}

		&__primary {
			flex-basis: grid-8pt(25);
			flex-grow: 1;
		}

		&__secondary {
			flex-basis: 0;
			flex-grow: 999;
			min-width: calc(50% - var(--size-split-view-gap));
		}
	}
</style>

<div class="un-split-view">
	<div class="un-split-view__wrapper">
		<div class="un-split-view__primary">
			<slot name="primary" />
		</div>
		<div class="un-split-view__secondary">
			<slot name="secondary" />
		</div>
	</div>
</div>
