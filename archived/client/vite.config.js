import { defineConfig } from 'vite'

export default defineConfig({
//when we run the command npm run build, the resources in the public directory will be output to the server/public directory
  build: {
    outDir: '../server/public',
    emptyOutDir: true
  },
  server: {
    proxy: {
      '/gifts': {
        target: 'http://localhost:3001'
      }
    }
  }
})