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

		:global(.example) {
			margin-top: var(--space-3);
		}
	}
</style>

<div class="layout-docs">
	<Box space="0">
		<slot name="nav" />
	</Box>
	<div class="layout-docs__main">
		<Box>
			<Markdown>
				<slot name="main" />
			</Markdown>
		</Box>
	</div>
</div>
