<script>
	export let title = "";
	export let desc = "";

	import { Text } from "../../src/components/index.js";
</script>

<header>
	<Text tag="h1" size="9" weight="bold">{title}</Text>
	<Text size="6" color="muted">{desc}</Text>
</header>
