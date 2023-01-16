import { defineConfig } from 'vite'
import Pages from 'vite-plugin-pages'
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    babel:{
      plugins:['@emotion']
    }
  }),Pages()],
  optimizeDeps: {
    esbuildOptions: {
      target: 'es2020',
    },
  },
  server:{
    port: 3000
  },
})
