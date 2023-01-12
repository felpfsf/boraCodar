// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nested: resolve(__dirname, 'desafios/player/index.html'),
        nested: resolve(__dirname, 'desafios/product-card/index.html')
      }
    }
  }
})
