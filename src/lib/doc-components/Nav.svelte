<script>
	import { HStack, Text } from '$lib/components';
</script>

<nav>
	<HStack space={2}>
		<Text><a href="/components/text">Text</a></Text>
		<Text><a href="/components/stack">Stack</a></Text>
		<Text><a href="/components/hstack">HStack</a></Text>
	</HStack>
</nav>

<style lang="scss">
	nav {
		height: 2rem;
		display: flex;
		align-items: center;
		padding: 0 var(--space-3);
	}
</style>
