import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://maekhacanal.com',
  output: 'server',
  session: {
    driver: 'memory',
  },
  adapter: cloudflare({
    mode: 'directory',
    imageService: 'compile',
  }),
  image: {
    service: { entrypoint: 'astro/assets/services/compile' },
  },
  i18n: {
    defaultLocale: 'th',
    locales: ['th', 'en', 'zh'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
