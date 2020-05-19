import autoPreprocess from "svelte-preprocess";
import svelte from "rollup-plugin-svelte";
import resolve from "@rollup/plugin-node-resolve";
import copy from "rollup-plugin-copy";
import pkg from "./package.json";

const name = pkg.name
	.replace(/^(@\S+\/)?(svelte-)?(\S+)/, "$3")
	.replace(/^\w/, (m) => m.toUpperCase())
	.replace(/-\w/g, (m) => m[1].toUpperCase());

export default {
	input: "./src/components/index.js",
	output: [
		{ file: pkg.module, format: "es" },
		{ file: pkg.main, format: "umd", name },
	],
	plugins: [
		svelte({
			preprocess: autoPreprocess({
				postcss: true,
				scss: { includePaths: ["src"] },
			}),

			// we'll extract any component CSS out into
			// a separate file - better for performance
			css: (css) => {
				css.write("dist/union.css", false);
			},
		}),
		copy({
			targets: [{ src: "public/theme.css", dest: "dist" }],
		}),
		resolve(),
	],
};
