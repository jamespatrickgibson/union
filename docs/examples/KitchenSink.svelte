<script>
	import {
		Box,
		Button,
		FixedImage,
		Inline,
		List,
		ListItem,
		MediaObject,
		Stack,
		Text,
	} from "../../src/components/index.js";

	let modes = [
		{ id: 1, name: `white` },
		{ id: 2, name: `light` },
		{ id: 3, name: `dark` },
		{ id: 4, name: `black` },
	];
	let modesList = [`white`, `light`, `dark`, `black`];

	let selectedLevel;

	// Text Sizes
	let textSizes = [
		"1",
		"2",
		"3",
		"4",
		"5",
		"6",
		"7",
		"8",
		"9",
		"10",
		"11",
		"12",
	];
</script>

<style lang="scss">
	.kitchen-sink {
		min-height: 100vh;

		:global(> *) {
			transition: all 300ms ease-in-out;
		}

		&__modes {
			display: grid;
			grid-template-columns: 1fr 1fr;
		}
	}
</style>

<!-- Controls -->
<Box mode="dark">
	<label for="levelPicker">Mode</label>
	<select name="levelPicker" bind:value="{selectedLevel}">
		{#each modes as mode}
			<option value="{mode}">{mode.name}</option>
		{/each}
	</select>
</Box>

<section class="kitchen-sink">
	<Box mode="{selectedLevel ? selectedLevel.name : 'loading'}">
		<Text tag="h1" size="12" weight="bold">Kitchen Sink</Text>
		<Stack space="5">

			<section class="kitchen-sink__modes">
				{#each modesList as mode}
					<Box mode="{mode}">
						<Text size="4" weight="bold">Mode {mode}</Text>
						<Text color="default">Default text in this Box.</Text>
						<Text color="muted">Muted text in this Box.</Text>
						<Text color="disabled">Disabled text in this Box.</Text>
						<Inline>
							<Button type="primary" variant="brand">Primary Brand</Button>
							<Button type="primary">Primary</Button>
							<Button type="secondary">Secondary</Button>
							<Button type="ghost">Ghost</Button>
						</Inline>
					</Box>
				{/each}
			</section>

			<section>
				<Text size="5" weight="bold">Buttons</Text>
				<Inline>
					<Button type="primary">Button</Button>
					<Button type="primary" variant="brand">Button</Button>
					<Button type="secondary">Button</Button>
					<Button type="secondary" variant="brand">Button</Button>
					<Button type="ghost">Button</Button>
					<Button type="ghost" variant="brand">Button</Button>
					<Button size="2" type="primary">Button</Button>
					<Button size="2" type="primary" variant="brand">Button</Button>
					<Button size="2" type="secondary">Button</Button>
					<Button size="2" type="secondary" variant="brand">Button</Button>
					<Button size="2" type="ghost">Button</Button>
					<Button size="2" type="ghost" variant="brand">Button</Button>
				</Inline>
			</section>

			<!-- Fixed Images -->
			<section>
				<Text size="5" weight="bold">Fixed Images</Text>
				<Inline>
					<FixedImage src="/born-to-run.jpg" size="1" />
					<FixedImage src="/born-to-run.jpg" size="2" />
					<FixedImage src="/born-to-run.jpg" size="3" />
					<FixedImage src="/born-to-run.jpg" size="4" />
					<FixedImage src="/born-to-run.jpg" size="5" />
					<FixedImage src="/born-to-run.jpg" size="6" />
					<FixedImage src="/born-to-run.jpg" size="7" />
				</Inline>
			</section>

			<!-- Text -->
			<section>
				<Text size="5" weight="bold">Text</Text>
				{#each textSizes as size}
					<Inline space="3">
						<Text size="{size}">{size} Normal</Text>
						<Text size="{size}" weight="medium">Medium</Text>
						<Text size="{size}" weight="bold">Bold</Text>
					</Inline>
				{/each}
			</section>
		</Stack>
	</Box>
</section>
