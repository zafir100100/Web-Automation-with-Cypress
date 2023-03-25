const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false, // for avoiding chrome web security
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
