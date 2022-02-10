import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const isDevelopment = process.env.NODE_ENV === 'development';
const baseUrl = process.env.BASE_URL ?? '';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter({
			pages: 'docs'
		}),

		paths: {
			base: baseUrl,
		},

		appDir: 'internal',

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		}
	}
};

export default config;
