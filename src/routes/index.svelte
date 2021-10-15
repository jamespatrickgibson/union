<script>
	import { Text } from '../lib/';
</script>

<svelte:head>
	<title>Welcome</title>
</svelte:head>

<Text tag="h1">Welcome to SvelteKit</Text>
<Text>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</Text>

<style lang="scss">
	@use 'utils' as *;
	:global(body) {
		background: $color-background-body;
		margin: 0;
	}
</style>
