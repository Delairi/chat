import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build:{
    outDir: './backend/dist'
  },
  server: {
    port: 3003,
    host:true,
    watch: {
      usePolling: true,
    },
  }
})
