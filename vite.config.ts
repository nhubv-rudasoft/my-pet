import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    watch: {
      usePolling: true,
    },
  },
  define: {
    "process.env": process.env,
  },
  assetsInclude: ['**/*.png'],
  build: {
    outDir: 'dist',
    sourcemap: false,
    cssCodeSplit: true,
    cssMinify: true,
    commonjsOptions: {
      include: [/node_modules/],
      extensions: ['.js', '.cjs']
    },
  }
})
