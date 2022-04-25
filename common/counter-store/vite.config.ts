import { fileURLToPath, URL } from 'url';
import { resolve } from 'path'
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'counter-store',
      filename: 'remoteEntry.js',
      exposes: {
        './CounterStore': './src/stores/counter.ts'
      },
      shared: ['vue', 'pinia']
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    assetsInlineLimit: 40960,
    target: 'esnext',
    minify: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'counter-store',
      formats: ['es']
    },
  }
});
