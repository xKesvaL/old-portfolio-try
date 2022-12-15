// Auto Adapter
import adapter from '@sveltejs/adapter-auto';

// Adapter for static pages
// import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';

import preprocess from 'svelte-preprocess';
import autoprefixer from 'autoprefixer';
import postcssPresetEnv from 'postcss-preset-env';

import rehypeExternalLinks from 'rehype-external-links';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

const extensions = ['.svelte', '.md'];

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
    }),
    mdsvex({
      extensions: ['.md'],
      rehypePlugins: [
        rehypeExternalLinks,
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            behavior: 'append',
            content: {
              type: 'element',
              tagName: 'span',
              properties: { className: ['heading-link'] },
              children: [{ type: 'text', value: '#' }]
            }
          }
        ]
      ]
    })
  ],
  extensions: extensions,
  kit: {
    adapter: adapter({
      edge: false,
      split: false
    }),
    prerender: {
      crawl: true,
      entries: ['*']
    }
  }
};

export default config;
