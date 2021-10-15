<script>
	import { Stack, Text } from '$lib/components';
	import { PageHeader } from '$lib/doc-components';

	let sizes = [1, 2, 3, 4, 5, 6, 7, 8, 9];
</script>

<svelte:head>
	<title>Text | Union</title>
</svelte:head>

<Stack space={3}>
	<PageHeader title="Text" />

	<section>
		<Stack>
			<Text tag="h2" size={8}>Sizes</Text>
			{#each sizes as size}
				<Text {size}>Text {size}</Text>
			{/each}
		</Stack>
	</section>
</Stack>
