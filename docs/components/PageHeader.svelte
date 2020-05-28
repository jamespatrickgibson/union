<script>
	export let title = "";
	export let desc = "";

	import { Box, Text } from "../../src/components/index.js";
</script>

<header>
	<Box space="0">
		<Text tag="h1" size="9" weight="bold">{title}</Text>
		<Text size="6" color="muted">{desc}</Text>
	</Box>
</header>
