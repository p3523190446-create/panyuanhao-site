import { defineConfig, passthroughImageService } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { autoNewTabExternalLinks } from './src/autoNewTabExternalLinks';

// https://astro.build/config
export default defineConfig({
  // 正式域名（ICP 备案完成后通过阿里云 ESA Pages 绑定上线）
  site: 'https://panyuanhao.com',
  output: 'static',
  image: {
    service: passthroughImageService()
  },
  integrations: [mdx(), sitemap(), tailwind()],
  markdown: {
    extendDefaultPlugins: true,
    rehypePlugins: [
      [
        autoNewTabExternalLinks,
        {
          domain: 'panyuanhao.com'
        }
      ]
    ]
  }
});