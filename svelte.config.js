// import node from '@sveltejs/adapter-node';
import vercel from '@sveltejs/adapter-vercel';
import sveltePreprocess from 'svelte-preprocess';

export default {
	preprocess: sveltePreprocess({ postcss: true }),
	kit: {
		// By default, `npm run build` will create a standard Node app.
		// You can create optimized builds for different platforms by
		// specifying a different adapter
		// adapter: node(),
		adapter: vercel(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
}
