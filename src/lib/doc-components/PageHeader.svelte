<script>
	export let title = 'Page Title';
	import { Text } from '$lib/components';
</script>

<header>
	<Text tag="h1" size={9}>{title}</Text>
</header>

<style lang="scss">
	header {
		height: 6rem;
		background: var(--color-gray);
		display: flex;
		align-items: center;
		padding: 0 var(--space-3);
	}
</style>
