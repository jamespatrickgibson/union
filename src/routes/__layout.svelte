<script context="module">
	import '../styles/global.scss';
	import { Header, Nav } from '$lib/doc-components';
</script>

<Header />
<Nav />

<main>
	<slot />
</main>
