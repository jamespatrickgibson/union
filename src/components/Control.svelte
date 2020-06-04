<script>
	export let label;

	import Label from "./Label.svelte";
</script>

<style lang="scss">
	@use "../scss/utils/all" as *;

	.un-control {
		position: relative;
	}
</style>

<div class="un-control">
	<Label text="{label}">
		<slot />
	</Label>
</div>
