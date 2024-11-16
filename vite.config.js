import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensure the output directory is 'dist' for deployment
    sourcemap: true, // Optional: Generate source maps for easier debugging in production
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[hash][extname]', // Better file organization
        chunkFileNames: 'assets/[name].[hash].js',
        entryFileNames: 'assets/[name].[hash].js',
      },
    },
  },
  server: {
    port: 3000, // Optional: Specify development server port
  },
});
