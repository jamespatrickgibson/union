<script>
	export let text;
</script>

<style lang="scss">
	@use "../scss/utils/all" as *;

	.un-label {
		&__label {
			@include text-preset(2);
			font-weight: var(--weight-bold);
		}
	}
</style>

<label class="un-label">
	<div class="un-label__label">{text}</div>
	<slot />
</label>
