import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  test: {
    include: ['./tests/**/*.test.ts'],
    environment: 'nuxt'
  }
})
