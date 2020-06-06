<script>
	import Prism from "svelte-prism";
	import {
		Box,
		Button,
		Control,
		Divider,
		Field,
		Label,
		Stack,
		Text,
		Link,
		FormField,
	} from "../src/components/index.js";
	import PageHeader from "./components/PageHeader.svelte";

	let selectedType = "default";
	$: elementExample = `<FormField
  type="${selectedType}"
>
  Link
</FormField>
`;

	function resetControls() {
		selectedType = "default";
	}
</script>

<style lang="scss">
	@use "../src/scss/utils/all" as *;

	.playground {
		display: grid;
		grid-template-columns: 1fr 15rem;
		grid-gap: var(--space-2);
		height: 100vh;

		&__example {
			overflow: hidden;
			padding: var(--space-4);
		}

		&__code {
			tab-size: 2;
		}

		&__radios {
			display: flex;
			flex-direction: column;
		}
	}
</style>

<div class="playground">
	<div class="playground__example">
		<FormField>
			<label slot="label">Filter</label>
			<input slot="input" type="search" />
		</FormField>
	</div>
	<div class="playground__controls">
		<Stack space="1">
			<PageHeader title="FormField" desc="A form component, used for inputs." />

			<!-- Controls -->
			<Box>
				<Text weight="bold">Controls</Text>

				<!-- New Form Control Components -->
				<Stack>
					<!-- Type -->
					<Field>
						<Control label="Type">
							<div class="playground__radios">
								<label>
									<input
										type="radio"
										bind:group="{selectedType}"
										value="default"
									/>
									default
								</label>
								<label>
									<input
										type="radio"
										bind:group="{selectedType}"
										value="article"
									/>
									article
								</label>
								<label>
									<input
										type="radio"
										bind:group="{selectedType}"
										value="implied"
									/>
									implied
								</label>
							</div>
						</Control>
					</Field>
				</Stack>

				<Button on:click="{resetControls}">Reset</Button>
			</Box>

			<Divider />

			<!-- Import Instructions-->
			<Box>
				<Text weight="bold">Use</Text>
				<Text>{`import { FormField } from "union-design-system"`}</Text>
			</Box>

			<Divider />

			<div class="playground__code">
				<Box>
					<Text weight="bold">Code</Text>
					<Prism language="html" source="{elementExample}" />
				</Box>
			</div>
		</Stack>
	</div>
</div>
