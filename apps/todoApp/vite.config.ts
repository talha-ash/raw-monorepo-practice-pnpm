import { defineConfig } from 'vite'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import { resolve } from 'node:path'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [
    TanStackRouterVite({ autoCodeSplitting: true }),
    viteReact(),
    tailwindcss(),
  ],
  // test: {
  //   globals: true,
  //   environment: 'jsdom',
  // },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      ...(command === 'serve'
        ? { core: resolve(__dirname, '../../packages/core/src/main.ts') }
        : {}),
      ...(command === 'serve'
        ? { '~core': resolve(__dirname, '../../packages/core/src') }
        : {}),
    },
  },
}))
