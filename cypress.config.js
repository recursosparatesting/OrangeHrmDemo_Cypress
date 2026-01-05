const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com',
    browser: 'chrome', // Esto sugiere el uso de Chrome,
    env: {
      USER_NAME: 'Admin',
      USER_PASS: 'admin123'
    }
   
  },
});