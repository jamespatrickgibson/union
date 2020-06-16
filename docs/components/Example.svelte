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

		// This resets some default style from Prism
		&__code {
			margin-top: -0.5em;
			margin-bottom: -0.5em;
		}
	}
</style>

<div class="example">
	<div class="example__preview">
		<slot />
	</div>
	<div class="example__code">
		<Prism language="html">
			{`
				<p>Sample Code</p>
			`}
		</Prism>
	</div>
</div>
