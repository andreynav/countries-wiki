import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    // @ts-ignore
    setupNodeEvents(on, config) {
      config.env.baseUrl =
        process.env.ENV === 'prod'
          ? 'https://countries-wiki-prod.vercel.app/'
          : 'http://localhost:3002/'

      return config
    },
    specPattern: 'cypress/e2e/tests/**/*.{js,jsx,ts,tsx}',
    defaultCommandTimeout: 5000,
    chromeWebSecurity: false,
    viewportWidth: 1000,
    viewportHeight: 800
  }
})
