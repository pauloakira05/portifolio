// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/meu-portifolio/', // nome do repositório
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
})
