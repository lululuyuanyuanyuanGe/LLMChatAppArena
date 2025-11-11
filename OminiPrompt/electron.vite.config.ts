import { resolve } from 'path'
import { defineConfig } from 'electron-vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  main: {
    build: {
      outDir: resolve('dist-electron'),
      rollupOptions: {
        input: {
          main: resolve('electron/main.ts')
        }
      }
    }
  },
  preload: {
    build: {
      rollupOptions: {
        input: {
          // You will need to create this file soon
          preload: resolve('electron/preload.ts')
        }
      }
    }
  },
  renderer: {
    build: {
      rollupOptions: {
        input: {
          main: resolve('index.html')
        }
      }
    },
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
    plugins: [react()]
  }
})