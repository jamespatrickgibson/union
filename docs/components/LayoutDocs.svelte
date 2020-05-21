<script>
	import { Box } from "../../src/components/index.js";
	import Markdown from "./Markdown.svelte";
</script>

<style lang="scss">
	@use "../src/scss/utils/all" as *;

	.layout-docs {
		display: grid;
		grid-template-columns: 15rem 1fr;
		min-height: 100vh;

		&__main {
			@include mode(dark);
			background: var(--color-neutral-900);
		}
	}
</style>

<div class="layout-docs">
	<Box mode="dark" space="0">
		<slot name="nav" />
	</Box>
	<div class="layout-docs__main">
		<Markdown>
			<slot name="main" />
		</Markdown>
	</div>
</div>
