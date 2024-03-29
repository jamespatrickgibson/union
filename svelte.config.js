import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: sveltePreprocess({
		scss: { includePaths: ['src/styles'] }
	}),
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;
