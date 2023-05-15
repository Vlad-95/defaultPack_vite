import { resolve } from 'path';
import { defineConfig } from 'vite';
// import laravel from 'laravel-vite-plugin';
// import webfontDownload from 'vite-plugin-webfont-dl';

export default defineConfig({
  plugins: [
    // laravel({
    //   input: ['/style.css', '/main.js'],
    //   refresh: false,
    // }),
    // webfontDownload([
    //   'https://fonts.googleapis.com/css2?family=Inter:wght@700&family=Montserrat:wght@400;500;600;700&display=swap',
    // ]),
  ],
  server: {
    open: '/resources/index.html',
  },
  base: './',
  build: {
    watch: true,
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'resources', 'index.html'),
      },
    },
  },
  css: {
    devSourcemap: true,
  },
});
