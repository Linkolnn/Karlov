import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@components': path.resolve(__dirname, "src", "components"),
      '@composable': path.resolve(__dirname, "src", "composable"),
      '@views': path.resolve(__dirname, "src", "views"),
      '@ui': path.resolve(__dirname, "src", "ui"),
      '@fonts': path.resolve(__dirname, "public", "fonts"),
      '@styles': path.resolve(__dirname, "src", "assets", "styles"),
      '@services': path.resolve(__dirname, "src", "services")
    }
  }
})
