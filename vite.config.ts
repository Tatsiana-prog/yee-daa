import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // Импортируй path

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  base: '/yee-daa/',  // Укажи базовый путь
  build: {
    outDir: 'dist',  // Папка для сборки
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});