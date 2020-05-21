<script>
	import Prism from "svelte-prism";
	import {
		Box,
		Button,
		Divider,
		Stack,
		Text,
	} from "../src/components/index.js";
	import PageHeader from "./components/PageHeader.svelte";

	let selectedSpace = "4";
	let selectedRadius = "0";
	let selectedShadow = "0";
	let modes = ["white", "light", "dark", "black"];
	let selectedMode = "light";

	function resetControls() {
		selectedSpace = "4";
		selectedRadius = "0";
		selectedShadow = "0";
		selectedMode = "light";
	}
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
			padding: var(--space-4);
			border-left: 1px solid var(--color-black);
		}

		&__controls {
			border-left: 1px solid var(--color-black);
		}

		&__range {
			label {
				display: block;
			}
		}

		&__code {
			tab-size: 2;
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

			<!-- Controls -->
			<Box>
				<Text weight="bold">Controls</Text>
				<div>
					<fieldset>
						<legend>Mode</legend>
						{#each modes as mode}
							<label>
								<input
									type="radio"
									bind:group="{selectedMode}"
									value="{mode}"
								/>
								{mode}
							</label>
						{/each}
					</fieldset>
				</div>
				<div class="playground__range">
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
				<div class="playground__range">
					<label for="radiusPicker">Radius</label>
					<input
						name="radiusPicker"
						type="range"
						min="0"
						max="4"
						bind:value="{selectedRadius}"
					/>
				</div>
				<div class="playground__range">
					<label for="shadowPicker">Shadow</label>
					<input
						name="shadowPicker"
						type="range"
						min="0"
						max="4"
						bind:value="{selectedShadow}"
					/>
				</div>
				<Button on:click="{resetControls}">Reset</Button>
			</Box>

			<Divider />

			<!-- Import Instructions-->
			<Box>
				<Text weight="bold">Use</Text>
				<Text>{`import { Box } from "union-design-system"`}</Text>
			</Box>

			<Divider />

			<div class="playground__code">
				<Box>
					<Text weight="bold">Code</Text>
					<Prism language="html">
						{`
<Box
	space="${selectedSpace}"
	radius="${selectedRadius}"
	shadow="${selectedShadow}">
	Box
</Box>
`}
					</Prism>
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
