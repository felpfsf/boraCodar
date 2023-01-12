// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        player: resolve(__dirname, 'desafios/player/index.html'),
        teste3: resolve(__dirname, 'desafios/teste3/index.html'),
        productCard: resolve(__dirname, 'desafios/product-card/index.html')
      }
    }
  }
})
