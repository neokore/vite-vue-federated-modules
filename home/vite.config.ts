import { fileURLToPath, URL } from 'url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    // host: '192.168.1.47',
    // port: 5000
  },
  cacheDir: 'node_modules/.cacheDir',
  plugins: [
    vue(),
    federation({
      name: 'home',
      filename: 'remoteEntry.js',
      remotes: {
        'counter-store': {
          external: 'http://localhost:5002/assets/remoteEntry.js',
          format: 'esm'
        }
      },
      exposes: {
        // './Main': './src/App.vue'
        './RoutedSection': './src/views/RoutedSection/RoutedSection.vue'
      },
      shared: ['vue', 'vue-router', 'pinia']
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
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        minifyInternalExports: false
      }
    }
  }
});
