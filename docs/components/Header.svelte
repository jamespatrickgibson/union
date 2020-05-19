<script>
	import { Box, Link, Text } from "../../src/components/index.js";
	export let version;
</script>

<header>
	<Box>
		<Text size="7" weight="bold">
			<Link to="/" type="implied">union.</Link>
		</Text>
		<Text size="2">{version}</Text>
	</Box>
</header>
