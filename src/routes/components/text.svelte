<script>
	import { Text } from '$lib/components';

	let sizes = [1, 2, 3, 4, 5, 6, 7, 8, 9];
</script>

<svelte:head>
	<title>Text | Union</title>
</svelte:head>

<Text tag="h1" size={9}>Text</Text>

<section>
	<Text tag="h2" size={8}>Sizes</Text>
	{#each sizes as size}
		<Text {size}>Text {size}</Text>
	{/each}
</section>
