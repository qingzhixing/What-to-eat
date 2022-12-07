import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import legacy from "_@vitejs_plugin-legacy@2.3.1@@vitejs/plugin-legacy";

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    legacy({
      targets: ['ie>=11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
    }),
  ],
});