import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { importAssets } from 'svelte-preprocess-import-assets';
import sveltePreprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    extensions: ['.svelte', '.svx', '.md'],
    preprocess: [
        sveltePreprocess(),
        mdsvex({
            extensions: ['.svx', '.md'],
        }),
        importAssets(),
        vitePreprocess(),
    ],

    kit: {
        adapter: adapter()
    }
};

export default config;