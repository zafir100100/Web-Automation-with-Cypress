const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // chromeWebSecurity: false, // for avoiding chrome web security
  e2e: {
    // watchForFileChanges: false, // for avoiding watching for file changes
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
