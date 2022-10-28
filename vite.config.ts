import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import { resolve } from 'path'

const config: UserConfig = {
	plugins: [sveltekit()],
	server: { port: 8080 },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
};

export default config;
