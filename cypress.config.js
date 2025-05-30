const { defineConfig } = require("cypress")
const date = require('dayjs')

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on)
    },
    env: {
      date: date().format('DD/M/YYYY'),
      allureAddVideoOnPass: true
    },
    viewportWidth: 1280,
    viewportHeight: 720,
    baseUrl: 'https://www.advantageonlineshopping.com/#/'
  },
});
