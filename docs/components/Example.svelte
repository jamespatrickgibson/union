<script>
	import Prism from "svelte-prism";
	import ExampleCode from "./ExampleCode.svx";
</script>

<style lang="scss">
	.example {
		border: 0.0625rem solid var(--color-border);

		&__preview {
			padding: var(--space-3);
			border-bottom: 0.0625rem solid var(--color-border);
		}
	}
</style>

<div class="example">
	<div class="example__preview">
		<slot />
	</div>
</div>
