import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    base: '/yee-daa/',  // имя репозитория или подпапки на GitHub Pages
  });