import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/free4talk-bots-landing-page/',
  build: {
    outDir: 'dist',
  }
});
