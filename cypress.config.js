const { defineConfig } = require("cypress");
const date = require('dayjs');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      date: date().format('DD/M/YYYY'),
    },
    viewportWidth: 1280,
    viewportHeight: 720,
    baseUrl: 'https://www.advantageonlineshopping.com/#/'
  },
});
