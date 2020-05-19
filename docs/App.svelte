<script>
	import { Route } from "tinro";
	import { Button, Text, UnionStyle } from "../src/components/index.js";
	import pkg from "../package.json";

	// Doc Pages
	import About from "./About.md";
	import Box from "./Box.md";
	import Contribute from "./Contribute.md";
	import Home from "./Home.md";
	import GettingStarted from "./GettingStarted.md";
	import TextDocs from "./Text.md";

	// Doc Components
	import Header from "./components/Header.svelte";
	import LayoutDocs from "./components/LayoutDocs.svelte";
	import Nav from "./components/Nav.svelte";

	// Examples
	import AppleMusic from "./examples/AppleMusic.svelte";
	import KitchenSink from "./examples/KitchenSink.svelte";
</script>

<UnionStyle />

<LayoutDocs>
	<span slot="nav">
		<Header version="{pkg.version}" />
		<Nav />
	</span>
	<div slot="main">
		<Route path="/">
			<Home />
		</Route>
		<Route path="/about">
			<About />
		</Route>
		<Route path="/getting-started">
			<GettingStarted />
		</Route>
		<Route path="/components/box">
			<Box />
		</Route>
		<Route path="/contribute">
			<Contribute />
		</Route>
		<Route path="/components/text">
			<TextDocs />
		</Route>
		<Route path="/examples/apple-music">
			<AppleMusic />
		</Route>
		<Route path="/examples/kitchen-sink">
			<KitchenSink />
		</Route>
	</div>
</LayoutDocs>
