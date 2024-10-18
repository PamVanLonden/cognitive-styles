import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  sitemap: {
    hostname: 'https://cognitive-styles.onrender.com/',
    lastUpdated: true
  }
});
