import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/principe-lab-website-new/',
  plugins: [
    react(),
    tailwindcss(),
  ],
})