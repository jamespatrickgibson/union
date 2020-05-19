<script>
	export let title;
	export let titleSize = "2";
	import Text from "./Text.svelte";
</script>

<style lang="scss">
	.un-navigation-section {
		padding: var(--space-3) 0;
	}

	.un-navigation-section + .un-navigation-section {
		padding-top: var(--space-1);
	}
</style>

<div class="un-navigation-section">
	{#if title}
		<Text size="{titleSize}" weight="bold">{title}</Text>
	{/if}
	<slot />
</div>
