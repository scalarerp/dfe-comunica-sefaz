import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['react/jsx-runtime'],
  },
  server: {
    port: 3000,
    proxy: {
      '/Service/': 'http://localhost:8001/',
    },
  },
  resolve: {
    alias: {
      assets: path.resolve(__dirname, './src/assets/'),
      components: path.resolve(__dirname, './src/components/'),
      pages: path.resolve(__dirname, './src/pages/'),
      services: path.resolve(__dirname, './src/services/'),
      store: path.resolve(__dirname, './src/store/'),
      utils: path.resolve(__dirname, './src/utils/'),
    },
  },
})
