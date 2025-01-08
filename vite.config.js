import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'/modulo-3-evaluacion-final-OtiliaNicola/',
   build: {
    minify: "esbuild",
    outDir: "../dist",
    sourcemap: "inline",
    emptyOutDir: true,
    rollupOptions: {
      input: inputFilesList,
      output: {
        sourcemap: true,
        entryFileNames: ({name}) => {
          if( name === 'main' ) {
            return 'js/main.js';
          }
          // default value
          // ref: https://rollupjs.org/configuration-options/#output-entryfilenames
          return "[name].js";
        },
      },
    },
  },
})
