<style lang="scss">
	@use "../../src/scss/utils/all" as *;

	.markdown {
		:global(h1:not(.un-text)) {
			@include text-preset(10);
			font-weight: var(--weight-bold);
			max-width: 65ch;
		}
		:global(h2:not(.un-text)) {
			@include text-preset(8);
			font-weight: var(--weight-bold);
			margin-top: baseline(8);
			max-width: 65ch;
		}
		:global(h3:not(.un-text)) {
			@include text-preset(6);
			font-weight: var(--weight-bold);
			margin-top: baseline(8);
			max-width: 65ch;
		}
		:global(h4:not(.un-text)) {
			@include text-preset(6);
			font-weight: var(--weight-bold);
			margin-top: baseline(6);
			max-width: 65ch;
		}
		:global(h5:not(.un-text)) {
			@include text-preset(5);
			font-weight: var(--weight-bold);
			margin-top: baseline(6);
			max-width: 65ch;
		}
		:global(h6:not(.un-text)) {
			@include text-preset(4);
			font-weight: var(--weight-bold);
			margin-top: baseline(6);
			max-width: 65ch;
		}
		:global(p:not(.un-text)) {
			@include text-preset(3);
			margin-top: baseline(4);
			max-width: 65ch;
		}
	}
</style>

<div class="markdown">
	<slot />
</div>
