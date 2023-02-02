// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        productCard: resolve(__dirname, 'desafios/product-card/index.html'),
        calculator: resolve(__dirname, 'desafios/calculator/index.html')
      }
    }
  }
})
