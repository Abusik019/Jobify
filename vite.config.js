import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        entryFileNames: 'js/[name].js', 
        chunkFileNames: 'js/chunks/[name].js',
        assetFileNames: (assetInfo) => {
          if (/\.(css)$/.test(assetInfo.name)) {
            return 'css/[name][extname]' 
          }
          return 'assets/[name][extname]' 
        },
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor' 
          }
          if (id.includes('components')) {
            return 'components' 
          }
          if (id.includes('pages')) {
            return 'pages' 
          }
        }
      }
    }
  },
  server: {
    historyApiFallback: true,
  },
})
