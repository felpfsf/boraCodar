// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nested: resolve(
          __dirname,
          'desafios/player/index.html',
          'desafios/teste3/index.html',
          'desafios/product-card/index.html'
        )
        // nested: resolve(__dirname, 'desafios/teste3/index.html'),
        // nested: resolve(__dirname, 'desafios/product-card/index.html')
      }
    }
  }
})
