// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/portifolio/',
  plugins: [react()],
  server: {
    port: 3000
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
})
