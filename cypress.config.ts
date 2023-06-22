import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    // setupNodeEvents(on, config) {
    //   // implement node event listeners here
    // },
    specPattern: 'cypress/e2e/tests/**/*.{js,jsx,ts,tsx}',
    defaultCommandTimeout: 5000,
    baseUrl: 'http://localhost:3002/',
    chromeWebSecurity: false,
    viewportWidth: 1000,
    viewportHeight: 800
  }
})