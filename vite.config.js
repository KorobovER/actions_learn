import { defineConfig } from 'vite'

export default defineConfig({
  base: '/actions_learn/',
  test: {
    globals: true,
    environment: 'jsdom',
  },
})
