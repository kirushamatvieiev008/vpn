import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';
import { resolve } from 'path';

export default defineConfig({
  base: '/vpn/', // Необхідно для GitHub Pages
  plugins: [injectHTML()],
  build: {
    rollupOptions: {
      input: {
        // index.html лежить у самому корені проєкту
        main: resolve(__dirname, 'index.html'), 
        
        // Перевірте, чи папка src та pages написані маленькими літерами!
        login: resolve(__dirname, 'src', 'pages', 'login.html'), 
        dashboard: resolve(__dirname, 'src', 'pages', 'dashboard.html'),
      },
    },
  },
});