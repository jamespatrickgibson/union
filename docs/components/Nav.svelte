<script>
	import {
		Box,
		Link,
		List,
		ListItem,
		Navigation,
		NavigationSection,
		Text,
	} from "../../src/components/index.js";
</script>

<Box>
	<Navigation>
		<NavigationSection>
			<List>
				<ListItem>
					<Text>
						<Link to="/about" type="implied">About</Link>
					</Text>
				</ListItem>
				<ListItem>
					<Text>
						<Link to="/getting-started" type="implied">Getting Started</Link>
					</Text>
				</ListItem>
				<ListItem>
					<Text>
						<Link to="/contribute" type="implied">Contribute</Link>
					</Text>
				</ListItem>
			</List>
		</NavigationSection>

		<NavigationSection title="Components">
			<List>
				<ListItem>
					<Text>
						<Link to="/components/box" type="implied">Box</Link>
					</Text>
				</ListItem>
				<ListItem>
					<Text>
						<Link to="/components/text" type="implied">Text</Link>
					</Text>
				</ListItem>
			</List>
		</NavigationSection>
		<!--
		<NavigationSection title="Examples">
			<List>
				<ListItem>
					<Text>
						<Link to="/examples/apple-music" type="implied">Apple Music</Link>
					</Text>
				</ListItem>
				<ListItem>
					<Text>
						<Link to="/examples/kitchen-sink" type="implied">Kitchen Sink</Link>
					</Text>
				</ListItem>
			</List>
		</NavigationSection>
		-->
	</Navigation>
</Box>
