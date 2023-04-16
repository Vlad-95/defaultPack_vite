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
  build: {
    watch: true,
  },
  css: {
    devSourcemap: true,
  },
});
