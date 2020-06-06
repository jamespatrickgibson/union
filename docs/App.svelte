<script>
	import { Route } from "tinro";
	import { Button, Text, UnionStyle } from "../src/components/index.js";
	import pkg from "../package.json";

	// Doc Pages
	import About from "./About.svx";
	import Box from "./Box.svelte";
	import Contribute from "./Contribute.svx";
	import Home from "./Home.svx";
	import GettingStarted from "./GettingStarted.svx";
	import TextDocs from "./Text.svx";
	import LinkDocs from "./Link.svelte";
	import FormFieldDocs from "./FormField.svelte";

	// Doc Components
	import Header from "./components/Header.svelte";
	import LayoutDocs from "./components/LayoutDocs.svelte";
	import Nav from "./components/Nav.svelte";

	// Examples
	import AppleMusic from "./examples/AppleMusic.svelte";
	import KitchenSink from "./examples/KitchenSink.svelte";
</script>

<svelte:head>
	<link href="https://myCDN.com/prism@v1.x/themes/prism.css" rel="stylesheet" />
</svelte:head>

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
		<Route path="/components/link">
			<LinkDocs />
		</Route>
		<Route path="/components/form-field">
			<FormFieldDocs />
		</Route>
		<Route path="/examples/apple-music">
			<AppleMusic />
		</Route>
		<Route path="/examples/kitchen-sink">
			<KitchenSink />
		</Route>
	</div>
</LayoutDocs>
