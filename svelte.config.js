// Auto Adapter
import adapter from '@sveltejs/adapter-auto';
/*
Adapter for production (uploading to Github)
import adapter from '@sveltejs/adapter-static';
*/
import preprocess from 'svelte-preprocess';
import autoprefixer from 'autoprefixer';
import postcssPresetEnv from 'postcss-preset-env';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    preprocess({
      preserve: ['module'],
      postcss: {
        plugins: [autoprefixer(), postcssPresetEnv()]
      }
    })
  ],
  kit: {
    adapter: adapter(),
    trailingSlash: 'always'
  }
};

export default config;
