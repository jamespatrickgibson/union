<script>
	import cssVars from "svelte-css-vars";

	export let src;
	export let alt;
	export let ratio = "16/9";

	$: [width, height = width] = ratio.toString().split(/[x|\/]/);

	$: styleVars = {
		w: width,
		h: height,
	};
</script>

<style>
	.un-frame {
		padding-bottom: calc(var(--w) / var(--h) * 100%);
		display: block;
		position: relative;
	}

	.un-frame img {
		overflow: hidden;
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
	}

	.un-frame img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		max-width: 100%;
		display: inline-block;
	}
</style>

<div class="un-frame" use:cssVars="{styleVars}">
	<img src="{src}" alt="{alt}" />
</div>
