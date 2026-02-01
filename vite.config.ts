import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    proxy: {
      '/api/v1': {
        target: 'http://localhost:5001',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // 将大型依赖项分离到单独的chunk中
          react: ['react', 'react-dom'],
          router: ['react-router-dom'],
          radix: ['@radix-ui/react-avatar', '@radix-ui/react-checkbox', '@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu', '@radix-ui/react-label', '@radix-ui/react-popover', '@radix-ui/react-radio-group', '@radix-ui/react-select', '@radix-ui/react-separator', '@radix-ui/react-slot', '@radix-ui/react-switch', '@radix-ui/react-tabs', '@radix-ui/react-tooltip'],
          supabase: ['@supabase/supabase-js'],
          query: ['@tanstack/react-query'],
          i18n: ['i18next', 'react-i18next'],
          form: ['react-hook-form', 'zod'],
        },
      },
    },
    // 调整chunk大小警告阈值
    chunkSizeWarningLimit: 1000,
  },
})
