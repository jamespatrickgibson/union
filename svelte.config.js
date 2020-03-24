// svelte.config.js
const sveltePreprocess = require('svelte-preprocess');

module.exports = {
  preprocess: sveltePreprocess({
    // ...svelte-preprocess options
    postcss: true,
    scss: { includePaths: ["src"] }
  }),
  // ...other svelte options
};