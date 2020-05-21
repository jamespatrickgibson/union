<script>
	import { Box, Stack, Text } from "../src/components/index.js";
	import PageHeader from "./components/PageHeader.svelte";

	let selectedSpace = "4";
	let selectedRadius = "0";
	let selectedShadow = "0";
	let selectedMode = "light";
</script>

<style lang="scss">
	@use "../src/scss/utils/all" as *;
	.playground {
		display: grid;
		grid-template-columns: 1fr 20rem;
		grid-gap: var(--space-2);
		height: 100vh;

		&__example {
			overflow: hidden;
			// @include mode(white);
			padding: var(--space-4);
		}

		&__controls {
			border-left: 1px solid var(--color-neutral-800);
		}
	}
</style>

<div class="playground">
	<div class="playground__example">
		<Box
			mode="{selectedMode}"
			space="{selectedSpace.toString()}"
			radius="{selectedRadius.toString()}"
			shadow="{selectedShadow.toString()}"
		>
			Box
		</Box>
	</div>
	<div class="playground__controls">
		<Stack space="1">
			<PageHeader
				title="Box"
				desc="A fundemental structural component, which comes in four modes."
			/>
			<Box mode="white">
				<Text weight="bold">Controls</Text>
				<div>
					<label for="spacePicker">Space</label>
					<input
						name="spacePicker"
						type="range"
						min="0"
						max="8"
						bind:value="{selectedSpace}"
					/>
					<Text>{selectedSpace}</Text>
				</div>
				<div>
					<label for="radiusPicker">Radius</label>
					<input
						name="radiusPicker"
						type="range"
						min="0"
						max="4"
						bind:value="{selectedRadius}"
					/>
				</div>
				<div>
					<label for="shadowPicker">Shadow</label>
					<input
						name="shadowPicker"
						type="range"
						min="0"
						max="4"
						bind:value="{selectedShadow}"
					/>
				</div>
			</Box>

			<Box mode="white">
				<Text weight="bold">Use</Text>
				<Text>{`import { Box } from "union-design-system"`}</Text>
			</Box>

			<div class="code">
				<Box mode="white">
					<Text weight="bold">Code</Text>
					<code>
						{`<Box space="${selectedSpace}" radius="${selectedRadius}" shadow="${selectedShadow}">Box</Box>`}
					</code>
				</Box>
			</div>
		</Stack>
	</div>
</div>

<!--
<Stack>
	<Stack>
		<Box mode="white">white</Box>
		<Box mode="light">light</Box>
		<Box mode="dark">dark</Box>
		<Box mode="black">black</Box>
	</Stack>

	<Stack>
		<Box mode="light" space="1">Space 1</Box>
		<Box mode="light" space="2">Space 2</Box>
		<Box mode="light" space="3">Space 3</Box>
		<Box mode="light" space="4">Space 4</Box>
		<Box mode="light" space="5">Space 5</Box>
		<Box mode="light" space="6">Space 6</Box>
		<Box mode="light" space="7">Space 7</Box>
	</Stack>

	<Stack>
		<Box mode="light" radius="1">Radius 1</Box>
		<Box mode="light" radius="2">Radius 2</Box>
		<Box mode="light" radius="3">Radius 3</Box>
		<Box mode="light" radius="4">Radius 4</Box>
	</Stack>

	<Stack>
		<Box mode="white" shadow="1">Shadow 1</Box>
		<Box mode="white" shadow="2">Shadow 2</Box>
		<Box mode="white" shadow="3">Shadow 3</Box>
		<Box mode="white" shadow="4">Shadow 4</Box>
	</Stack>
</Stack>
-->
