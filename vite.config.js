import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';



export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    minify: 'esbuild',
    outDir: './dist',
    sourcemap: true, 
    emptyOutDir: true,
    
  },
});
