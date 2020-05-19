<script>
	import { Box } from "../../src/components/index.js";
	import Markdown from "./Markdown.svelte";
</script>

<style lang="scss">
	.layout-docs {
		display: grid;
		grid-template-columns: 15rem 1fr;
		min-height: 100vh;
		background-color: var(--color-bg-level-0);
	}
</style>

<div class="layout-docs">
	<Box mode="dark" space="0">
		<slot name="nav" />
	</Box>
	<Box mode="light" space="4">
		<Box mode="white" space="4">
			<Markdown>
				<slot name="main" />
			</Markdown>
		</Box>
	</Box>
</div>
