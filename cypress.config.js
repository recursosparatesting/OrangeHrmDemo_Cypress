const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com',
    browser: 'chrome', // Esto sugiere el uso de Chrome
    setupNodeEvents(on, config) {
      // implementar node event listeners aquí
    },
  },
});